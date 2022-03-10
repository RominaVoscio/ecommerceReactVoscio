import {CardGroup} from 'react-bootstrap'
import Item from "./Item";
const ItemList =({productos})=>{
    return(<>
        <CardGroup>
        <ul>
            {productos.map((producto)=>{
                return(
                    <Item key={producto.id} producto={producto}/>
                )
            })}
        </ul>
        </CardGroup>
        </>
    )
};
export default ItemList;