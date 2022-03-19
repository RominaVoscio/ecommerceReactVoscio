import { Link } from 'react-router-dom';
import{Col, Card, Button} from 'react-bootstrap';

const Item =({producto})=>{
    return(
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                <Link to={`/item/${producto.id}`}>
                <Button variant="primary">
                
                Detalle
                
                </Button>
                </Link>
            </Card.Body>
        </Card>
        </Col>
    )
};
export default Item;