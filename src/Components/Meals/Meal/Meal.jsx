import React from 'react';
import classes from "./meal.module.css";
import Counter from '../../UI/Counter/Counter';

/*
*   食物组件
* */
const Meal = ({
    data,
    NoDetail
}) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img alt='' src={data.img} />
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{data.title}</h2>
                {NoDetail ? null : <p className={classes.Desc}>{data.desc}</p>}
                {/* <p className={classes.Desc}>{data.desc}</p> */}
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
