import CartWidget from "./CartWidget"


const NavBar =()=> {
    return(
        <>
        <header id="MainHeader">
            <h1>COAPRO</h1>
            <CartWidget/>
            <nav>
                <a href="#">Liquidos</a>
                <a href="#">Lentes</a>
                <a href="#">Estuches </a>
            </nav>
        </header>
        </>
    )
}

export default NavBar