import React from 'react';
import classes from './checkoutItem.module.css';
import Counter from '../../../UI/Counter/Counter';

const CheckoutItem = ({
    meal
}) => {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.MealImgOuter}>
                <img src={meal.img} alt="" />
            </div>
            <div className={classes.CheckoutItemDes}>
                <h2 className={classes.Title}>{meal.title}</h2>
                <div className={classes.PriceOuter}>
                    <Counter meal={meal} />
                    <p className={classes.Price}>{meal.amount * meal.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;