import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemDetailContainer from "./ItemDetailContainer"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

function App () {
    return (
            <BrowserRouter>
            <header id="MainHeader">
                <NavBar/>  
            </header> 
            <main>  
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Coapro"/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<CartWidget/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes> 
            </main>
                <Footer/>
            </BrowserRouter>
    )
};
export default App;
