import React, {useContext} from 'react';
import ReactDOM from "react-dom";
import classes from "./checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CheckoutItem from './CheckoutItem/CheckoutItem';
import CartContext from '../../store/cart-context';
import Bar from './Bar/Bar';

const checkoutRoot = document.getElementById('checkout-root');
const Checkout = (props) => {
    const ctx = useContext(CartContext);
    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}
            >
                <FontAwesomeIcon
                    onClick={() => props.hideCheckoutHandler()}
                    icon={faXmark} />
                {/* <div onClick={() => console.log(798)}>
                    <span onClick={() => console.log(456)}>123</span>
                </div> */}
            </div>
            <div className={classes.CheckoutDes}>
                <header className={classes.Header}>
                    <h2>餐品详情</h2>
                </header>

                <div className={classes.Meals}>
                    {/* <CheckoutItem /> */}
                    {ctx.item.map((item) => {
                        return <CheckoutItem key={item.id} meal={item} />
                    })}
                </div>
                <footer className={classes.Footer}>
                    <p>{ctx.totalPrice}</p>
                </footer>
                <Bar TotalPrice={ctx.totalPrice} />
            </div>
        </div>,
        checkoutRoot);
};

export default Checkout;
