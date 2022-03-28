import { useContext } from "react";
import {context} from './CartContext'
const Cart=()=>{
    const {removeItem, clear, cart}= useContext(context)
    //const total = resultado.total

    return(
        <>
        <div id="cartCompra">
            <h2>Carrito de Compra</h2>
            {cart.map(item=>(
                <div key={item.producto.id}>
                    <p>#</p>
                    <h4>{item.producto.nombre}</h4>
                    <p>{item.producto.descripcion}</p>
                    <p>${item.producto.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick= {()=>removeItem(item.producto.id)}>Borrar Item</button>
                </div>        
        ))}
        <button onClick={()=>clear()}>Borrar Carrito</button>
        </div>
        </>

    )
};
export default Cart;