import React, {useContext, useState} from 'react';
import classes from './cart.module.css';
import IconImg from '../../asset/bag.png';
import CartContext from '../store/cart-context';
import CartDetail from './CartDetail/CartDetail';
import Checkout from './Checkout/Checkout';


const Cart = () => {
const context = useContext(CartContext);

const toggleDetailHandler = () => {
    setShowDetail((prevState) => !prevState)
}

// 弹起结算页面的事件
const showCheckoutHandler = () => {
    if(context.totalAmount === 0) return;
    setShowCheckout(true);
}

// 关闭结算页面的事件
const hideCheckoutHandler = () => {
    setShowCheckout(false);
}

// 控制购物车详情框是否显示隐藏
const [showDetail, setShowDetail] = useState(false);
// 控制是否拉起结算页面
const [showCheckout, setShowCheckout] = useState(false);
let bool = context.totalAmount;
    return (
        <div className={classes.Cart} onClick={() => toggleDetailHandler()} >
           { showCheckout &&
                <Checkout
                    hideCheckoutHandler={hideCheckoutHandler}
                    />}
            { context.totalAmount> 0 && showDetail ?  <CartDetail /> : null}
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
            <button
                className={`${classes.Button} ${bool ? '' : classes.Disabled}`}
                onClick={() => showCheckoutHandler()}
                >
                    去结算
                </button>
        </div>
    );
};

export default Cart;