//import ItemCount from './ItemCount'
 //<ItemCount stock={5} inicial={1} OnAdd={miOnAdd}/>
 import {Container} from 'react-bootstrap'
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
let productosIniciales=[
    {
        id: 1,
        nombre: "Arlyt",
        precio: 200,
        imagen: "/arlytExpress120.jpg",
    },
    {
        id: 2,
        nombre: "Natura",
        precio: 300,
        imagen: "/naturaExpess.jpg",
    },
    {
        id: 3,
        nombre: "Renu",
        precio: 250,
        imagen: "/renuchico.jpg",
    }]
const ItemListContainer =(prop) =>{
    //const miOnAdd=()=>{}
    const[loading, setLoading]= useState(true)
    const[productos, setProductos]= useState([])
    const[error, setError]= useState("Hubo un error al cargar los datos")
    

    useEffect(()=>{
        const promesa= new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            }, 2000)
        })
        promesa.then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    })

    return(
        <>
        <Container as="main" id="contPrincipal">
            <h2 id="styleH2"> {prop.greeting}! </h2>
            <p>{loading ? "cargando..." : "Productos Disponibles:"}</p>
            <ItemList productos={productos}/>
        </Container>
        </>
    )
};
export default ItemListContainer;