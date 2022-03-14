import {Container, Row} from 'react-bootstrap'
import Item from "./Item";
const ItemList =({productos})=>{
    return(
           <>
            <Container>
                <Row>
                        {productos.map((producto)=>{
                            return(
                                <Item key={producto.id} producto={producto}/>
                            )
                        })}
                </Row>    
            </Container>
            </>
    )
};
export default ItemList;