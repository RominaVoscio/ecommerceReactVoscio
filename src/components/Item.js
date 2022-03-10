import{Card, Button} from 'react-bootstrap'

const Item =({producto})=>{
    return(
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
        //<div>
          //  <p>{producto.nombre}</p>
            //<p>Precio: $ {producto.precio}</p>
            //<img src={producto.imagen}></img>
        //</div>
    )
};
export default Item;