import {NavLink} from 'react-router-dom';
import { useContext } from "react";
import {context} from './CartContext';

const CartWidget =()=> {
    const {cartCantidad}= useContext(context)
    return(<>
            <NavLink to="/cart">
                <i class="fa fa-shopping-cart" aria-hidden="true">{cartCantidad}</i>
            </NavLink>
            </>
    )
};

export default CartWidget;