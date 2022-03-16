 import {NavLink} from 'react-router-dom';
const CartWidget =()=> {
    return(<>
            <NavLink to="/carrito">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </NavLink>
            </>
    )
};

export default CartWidget;