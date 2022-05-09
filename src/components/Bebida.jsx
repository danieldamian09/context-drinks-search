import {Col, Card, Button} from 'react-bootstrap'

const Bebida = ({bebida}) => {
  return (
    <Col md={6} lg={4}>
      <Card className='mb-4'>
        <Card.Img variant="top" src={bebida.strDrinkThumb} alt={`Imagen de Bebida ${bebida.strDrink}`} />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Card.Text>
            {bebida.strInstructions}
          </Card.Text>
          <Button className='w-100 text-uppercase mt-2' variant="warning">
            Ver
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida