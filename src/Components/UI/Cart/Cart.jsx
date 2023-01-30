import React, {useContext} from 'react';
import classes from './cart.module.css';
import IconImg from '../../../asset/bag.png';
import CartContext from '../../store/cart-context';

const Cart = () => {
const context = useContext(CartContext)
let bool = context.totalAmount;
    return (
        <div className={classes.Cart}>
            <div className={classes.Icon}>
                <img src={IconImg} alt="" />
                {
                    bool ?
                        <span className={classes.TotalAmount}>{context.totalAmount}</span> 
                        : null
                }
            </div>
            {
                bool ? 
                    <div className={classes.Price}>{context.totalPrice}</div>
                    : <div className={classes.Nomeal}>未选购商品</div>
            }
            
            <button className={`${classes.Button} ${bool ? '' : classes.Disabled}`}>去结算</button>
        </div>
    );
};

export default Cart;