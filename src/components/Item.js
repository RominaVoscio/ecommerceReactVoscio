import{Col, Card, Button} from 'react-bootstrap'

const Item =({producto})=>{
    return(
        <Col md="auto">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                <Button variant="primary">Detalle</Button>
            </Card.Body>
        </Card>
        </Col>
    )
};
export default Item;