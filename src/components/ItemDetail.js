import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useContext, useState } from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {context} from './CartContext';

const ItemDetail =({producto})=>{
    const [seleccionado, setSeleccionado]= useState(false)
    const [cambio, setCambio]= useState(false)
    const {addItem}= useContext(context)
    const myOnAdd= (unidadSeleccionada)=>{
        if (unidadSeleccionada!== undefined){
            setSeleccionado(unidadSeleccionada)
        }
        setCambio(true)
    }
  

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
                        { cambio ? <h4>Gracias por comprar</h4> : 
                            <ItemCount stock={5} inicial={1} onAdd={myOnAdd}/> }
                        <p>{seleccionado ?'Usted seleccionó el producto': 'No se eligio ninguna cantidad'}</p>
                        {seleccionado ? <Button onClick={()=>{addItem(producto, seleccionado)}} variant="outline-primary"><Link to="/cart">Carrito</Link></Button> : null}
                    </Card.Body>
                </Card>
                </Col>

            </Row>    
        </Container>
        </>
    )

};
export default ItemDetail;
//<Button variant="primary">Comprar</Button>