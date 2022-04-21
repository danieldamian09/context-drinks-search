import { useContext } from 'react';
import CategoriasContext from "../context/CategriasProvider";

const useCategorias = () => { 
  return useContext(CategoriasContext);
}

export default useCategorias;

