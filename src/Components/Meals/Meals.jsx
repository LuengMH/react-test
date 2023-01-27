import React from 'react';
import Meal from './Meal/Meal';
import classes from './Meals.module.css';

const Meals = ({
    mealData, onAdd, onSub
}) => {
    return (
        <div className={classes.Meals}>
            { mealData.map((item) => {
                return (
                    <Meal
                        key={item.id}
                        onAdd={onAdd}
                        onSub={onSub}
                        data={item}
                        />
                );
            })}
        </div>
    );
};

export default Meals;