import {Container} from 'react-bootstrap'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
let productoSelect= {
        id: 1,
        nombre: "Arlyt",
        precio: 200,
        imagen: "/arlytExpress120.jpg",
        descripcion: "ARLYT EXPRESS MULTIUSO SOLUCIÓN MULTIPROPÓSITO E ISOTÓNICA PARA TODO TIPO DE LENTES DE CONTACTO BLANDAS. LIMPIADORA, DESINFECTANTE, CONSERVADORA, HUMECTANTE Y DE ENJUAGUE.",
    }
const ItemDetailContainer =()=>{
    const[loading, setLoading]= useState(true)
    const[producto, setProducto]= useState({})
    useEffect(()=>{
        const promesa= new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productoSelect)
            }, 2000)
        })
        promesa.then((respuestaDeLaApi)=>{
            setProducto(productoSelect)
        })
        .catch((errorDeLaApi)=>{
            console.log("Error al cargar")
        })
        .finally(()=>{
            setLoading(false)
        })
    })
    return(
        <>
        <Container as="main" id="contDetalle">
            <h2>Producto Seleccionado</h2>
            <p>{loading ? "cargando..." : "Detalle del producto:"}</p>
            <ItemDetail producto={producto}/>
        </Container>
        </>

    )
};
export default ItemDetailContainer;