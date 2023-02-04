import React, {useContext, useState} from 'react';
import classes from './cartDetail.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Meal from '../../Meals/Meal/Meal';
import CartContext from '../../store/cart-context';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetail = () => {
    const cxt = useContext(CartContext);
    const [showConfirm, setShowConfirm] = useState(false);


    // 点击清空购物车触发事件
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }

    // 点击取消按钮触发事件
    const cancelHandler = () => {
        setShowConfirm(false);
    }

    const okHandler = () => {
        cxt.shopCarDispatch({
            type: 'clear'
        });
    }

    return (
        <Backdrop onClick={(e) => cancelHandler(e)}>
            {/* 展示确认框 */}
            { showConfirm && <Confirm 
                cancelHandler={cancelHandler}
                okHandler={okHandler}
            />}
            <div className={classes.CartDeteail}
                onClick={(e) => e.stopPropagation()}
                >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        cxt.item.map((item) => {
                            return <Meal
                                key={item.id}
                                data={item}
                                NoDetail
                                />
                        })
                    }
                </div>
            </div>
        </Backdrop>
    );
};
export default CartDetail;