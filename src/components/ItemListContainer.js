//import ItemCount from './ItemCount'
 //<ItemCount stock={5} inicial={1} OnAdd={miOnAdd}/>
import {productosIniciales} from './productos'
import {Container} from 'react-bootstrap'
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const ItemListContainer =(prop) =>{
    //const miOnAdd=()=>{}
    const[loading, setLoading]= useState(true)
    const[productos, setProductos]= useState([])
    const {id}= useParams()

    useEffect(()=>{
        const promesa= new Promise((resolve)=>{
            setTimeout(()=>{  
                const myCat= id
                ? productosIniciales.filter((producto)=> producto.categoria === id)
                : productosIniciales;
                resolve(myCat);
            }, 2000);
        })
        promesa
        .then((res)=>{
            setProductos(res);
        })
        .catch((errorDeLaApi)=>{
            toast.error("Error al cargar");
        })
        .finally(()=>{
            setLoading(false);
        });
    },[id]);

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