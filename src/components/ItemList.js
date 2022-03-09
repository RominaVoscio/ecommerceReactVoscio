
import Item from "./Item";
const ItemList =(props)=>{
    return(
        <ul>
            {props.productos.map((producto)=>{
                return(
                    <Item producto/>
                )
            })}
        </ul>
    )
};
export default ItemList;