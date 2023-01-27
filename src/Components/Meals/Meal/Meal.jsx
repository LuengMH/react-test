import React from 'react';
import classes from "./meal.module.css";
import Counter from '../../UI/Counter/Counter';

/*
*   食物组件
* */
const Meal = ({
    data,
}) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img alt='' src={data.img} />
            </div>
            <div>
                <h2 className={classes.Title}>{data.title}</h2>
                <p className={classes.Desc}>{data.desc}</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{data.price}</span>
                    {/* <div>数量</div> */}
                    <Counter
                        meal={data}
                        />
                </div>
            </div>
        </div>
    );
};

export default Meal;
