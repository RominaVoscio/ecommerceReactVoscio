
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar =()=> {
    return(
        <>
            <Link to="/">
                <h1>Coapro</h1>
            </Link>
            <CartWidget/>
            <nav>
                <NavLink to="/categoria/1">LiquidosCat1</NavLink>
                <NavLink to="/categoria/2">LiquidosCat2</NavLink>
                <NavLink to="/categoria/3">LiquidosCat3</NavLink>
            </nav>
        </>
    )
}

export default NavBar