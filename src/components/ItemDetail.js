
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
const ItemDetail =({producto})=>{
    return(
        <>
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={producto.imagen} />
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '24rem' }}>
                <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>
                            <p>{producto.descripcion}</p>
                        Precio: ${producto.precio}
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card>
                </Col>

            </Row>    
        </Container>
        </>
    )

};
export default ItemDetail;