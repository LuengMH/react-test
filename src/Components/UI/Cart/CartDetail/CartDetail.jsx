import React, {useContext} from 'react';
import classes from './cartDetail.module.css';
import BarProp from '../../../UI/Backdrop/Backdrop.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Meal from '../../../Meals/Meal/Meal';
import CartContext from '../../../store/cart-context';

const CartDetail = () => {
    const cxt = useContext(CartContext);

    return (
        <BarProp>
            <div className={classes.CartDeteail}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        cxt.item.map((item) => {
                            console.log(item);
                            return <Meal
                                key={item.id}
                                data={item}
                                NoDetail
                                />
                        })
                    }
                </div>
            </div>
        </BarProp>
    );
};
export default CartDetail;