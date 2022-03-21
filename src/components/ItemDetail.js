import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useState } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
const ItemDetail =({producto})=>{
    const [seleccionado, setSeleccionado]= useState(false)
    const myOnAdd= (unidadSeleccionada)=>{
        if (unidadSeleccionada!== undefined){
            setSeleccionado(unidadSeleccionada)
        }
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
                        <ItemCount stock={5} inicial={1} onAdd={myOnAdd}/>
                        <p>{seleccionado ?'Usted seleccionó algo': 'No se eligio ninguna cantidad'}</p>
                        {seleccionado ? <Link to="/cart">carrito</Link> : null}
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