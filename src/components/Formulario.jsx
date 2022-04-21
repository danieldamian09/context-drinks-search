import {Button, Form, Row, Col} from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";

const Formulario = () => {

	const { categorias } = useCategorias();
	
	console.log(categorias);

	return (
		<Form>
			<Row>
				<Col md={6}>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ej: Tequila, Vodka, etc"
							name="nombre"
							id="nombre"
						/>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"

            >
							<option value="">-- Selecciona Categoía --</option>
							{categorias.map(categoria => (
								<option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
							))}
            </Form.Select>
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
};

export default Formulario;