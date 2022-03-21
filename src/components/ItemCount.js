import { useState } from "react";
const ItemCount =({stock, inicial, onAdd})=>{
    const [contador, setContador]= useState(inicial)
    const incrementaClick =(e)=>{
        if (contador< stock){
            setContador(contador +1)
        }
    }
    const decrementarClick =(e)=>{
        if(contador> inicial){
            setContador(contador -1)
        }
    }
    const confirmar =(e)=>{
        console.log(e)
        onAdd(contador)
    }
    return(
        <>
            <p>Cantidad de ítems: {contador}</p>
            <button onClick= {incrementaClick}> Aumentar </button>
            <button onClick= {confirmar}>Confirmar</button>
            <button onClick= {decrementarClick}> Disminuir </button>
        </>
    );
}
export default ItemCount;