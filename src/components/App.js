import ItemListContainer from "./ItemListContainer"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemDetailContainer from "./ItemDetailContainer";

function App () {
    return (
            <>
            <header>
                <NavBar/>
            </header>    
            <ItemListContainer greeting="Bienvenidos a Coapro"/>
            <ItemDetailContainer/>
            <Footer/>
            </>
    )
};
export default App;
