import { createContext, useState } from "react";

export const context = createContext()
const {Provider}= context
const CartContext=({children})=>{
    const[ cart, setCart]= useState([])
   const[cartCantidad, setCartCantidad]= useState(0)
   // const [total, setTotal]= useState(0)

    const addItem=(producto, cantidad)=>{
        let cartProducto={producto, cantidad}
        let cartAux=[]
        
        if(isInCart(producto.id)){
            console.log('esta en el carrito')
            cartProducto= cart.find(item=> item.producto.id === producto.id)
            cartProducto.cantidad= cartProducto.cantidad + cantidad
            cartAux=[...cart]
        }else{
            console.log('no esta en el carrito')
            cartAux=[cartProducto, ...cart]
        }
        let cant= cartCantidad + cantidad
        setCart(cartAux)
        setCartCantidad(cant)
    }
    console.log(cartCantidad)
    const isInCart=(id)=>{

        return cart && cart.some(item => item.producto.id === id)
    }
    const removeItem=(id)=>{
            if(isInCart(id)){
                const cartAux= cart.filter( item=> item.producto.id !== id)
                setCart(cartAux)
            }
    }

    const clear=()=>{
        setCart([])
        setCartCantidad(0)
    }

    const valorDelContexto= {
        //total : total,
        cart : cart,
        cartCantidad : cartCantidad,
        removeItem : removeItem,
        addItem : addItem,
        clear : clear
    }
    
    return(
        <Provider value={valorDelContexto}>
         {children}
        </Provider>
    )
};
export default CartContext;
