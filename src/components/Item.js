import { Link } from 'react-router-dom';
import{Col, Card} from 'react-bootstrap'
import { Button } from 'bootstrap';

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
                <button>
                <Link to="/item/:id">
                   <p>Detalle</p>
                </Link>
                </button>
            </Card.Body>
        </Card>
        </Col>
    )
};
export default Item;