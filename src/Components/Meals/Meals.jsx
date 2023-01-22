import React from 'react';
import Meal from './Meal/Meal';
import classes from './Meals.module.css';

const Meals = ({
    mealData
}) => {
    return (
        <div className={classes.Meals}>
            { mealData.map((item) => {
                return (
                    <Meal key={item.id} data={item} />
                );
            })}
        </div>
    );
};

export default Meals;