import {Container} from 'react-bootstrap'
import {productosIniciales} from './productos'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemDetailContainer =()=>{
    const[loading, setLoading]= useState(true)
    const[producto, setProducto]= useState({})
    const {id}= useParams()
    useEffect(()=>{
        const promesa= new Promise((resolve)=>{
            setTimeout(()=>{
                const myCat = productosIniciales.find((producto) => producto.id === id);
                resolve(myCat)
            }, 2000)
        })
        promesa.then((res)=>{
            setProducto(res)
        })
        .catch((errorDeLaApi)=>{
            toast.error("Error al cargar")
        })
        .finally(()=>{
            setLoading(false)
        }, [id]);
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