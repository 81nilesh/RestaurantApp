import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <div>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </div>
    )
};

export default HeaderCartButton;
