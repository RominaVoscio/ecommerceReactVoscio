//import ItemCount from './ItemCount'
 //<ItemCount stock={5} inicial={1} OnAdd={miOnAdd}/>
 import {Container} from 'react-bootstrap'
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
let productosIniciales=[
    {
        id: 1,
        nombre: "Arlyt",
        precio: 200,
        imagen: "/arlytExpress120.jpg",
        descripcion:"ARLYT EXPRESS MULTIUSO SOLUCIÓN MULTIPROPÓSITO E ISOTÓNICA PARA TODO TIPO DE LENTES DE CONTACTO BLANDAS. LIMPIADORA, DESINFECTANTE, CONSERVADORA, HUMECTANTE Y DE ENJUAGUE.",
        categoria: 1,
    },
    {
        id: 2,
        nombre: "Natura",
        precio: 300,
        imagen: "/naturaExpess.jpg",
        descripcion:"NATURA EXPRESS MULTIUSO SOLUCIÓN MULTIPROPÓSITO E ISOTÓNICA PARA TODO TIPO DE LENTES DE CONTACTO BLANDAS. LIMPIADORA, DESINFECTANTE, CONSERVADORA, HUMECTANTE Y DE ENJUAGUE.",
        categoria: 2,
    },
    {
        id: 3,
        nombre: "Renu",
        precio: 250,
        imagen: "/renuchico.jpg",
        descripcion:"RENU PLUS MULTIUSO SOLUCIÓN MULTIPROPÓSITO E ISOTÓNICA PARA TODO TIPO DE LENTES DE CONTACTO BLANDAS. LIMPIADORA, DESINFECTANTE, CONSERVADORA, HUMECTANTE Y DE ENJUAGUE.",
        categoria: 3,
    }]
const ItemListContainer =(prop) =>{
    //const miOnAdd=()=>{}
    const[loading, setLoading]= useState(true)
    const[productos, setProductos]= useState([])
    const[error, setError]= useState("Hubo un error al cargar los datos")
    const id= useParams()

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
    },[id])

    return(
        <>
        <Container as="main" id="contPrincipal">
            <h2 id="styleH2"> {prop.greeting} </h2>
            <p>{loading ? "cargando..." : "Productos Disponibles:"}</p>
            <ItemList productos={productos}/>
        </Container>
        </>
    )
};
export default ItemListContainer;