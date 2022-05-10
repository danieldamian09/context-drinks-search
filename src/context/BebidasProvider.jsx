import {useState, createContext, useEffect} from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {
	const [bebidas, setBebidas] = useState([]);
	const [modal, setModal] = useState(false);
	const [bebidaID, setBebidaID] = useState(null);
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);

	// Consulta las bebidas
	const consultarBebida = async (datos) => {
		try {
			const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
			const {data} = await axios(url);
			setBebidas(data.drinks);
		} catch (error) {
			console.log(error);
		}
	};

	// Consulta receta para el Modal
  const consultarReceta = async () => {
    setCargando(true);
		if (!bebidaID) return;

		try {
			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaID}`;
			const {data} = await axios(url);
			setReceta(data.drinks[0]);
		} catch (error) {
			console.log(error);
    }
    setCargando(false);
	};

	useEffect(() => {
		consultarReceta();
	}, [bebidaID]);

  // Abre  y cierra el Modal
	const handleModalClick = () => {
		setModal(!modal);
	};

  // Guarda el ID de la bebida para consultar la receta
	const handleBebidaID = (id) => {
		setBebidaID(id);
	};

	return (
		<BebidasContext.Provider
			value={{
				consultarBebida,
				bebidas,
				modal,
				handleModalClick,
				handleBebidaID,
        receta,
        cargando
			}}
		>
			{children}
		</BebidasContext.Provider>
	);
};

export {BebidasProvider};

export default BebidasContext;
