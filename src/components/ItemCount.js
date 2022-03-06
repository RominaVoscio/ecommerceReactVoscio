import { useState } from "react";
const ItemCount =(props)=>{
    const [contador, setContador]= useState(props.inicial)
    const incrementaClick =()=>{
        if (contador< props.stock &&  contador>= 1){
            setContador(contador +1)
        }
    }
    const decrementarClick =()=>{
        if(contador> 1){
            setContador(contador -1)
        }
    }
    const confirmar =()=>{
        setContador(1)
    }
    return(
        <>
        <div className="container">
            <p>Cantidad de ítems: {contador}</p>
            <button onClick= {incrementaClick}> + </button>
            <button onClick= {confirmar}>Confirmar</button>
            <button onClick= {decrementarClick}> - </button>
        </div>
        </>
    );
}
export default ItemCount;