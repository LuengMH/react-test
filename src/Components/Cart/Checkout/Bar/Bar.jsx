import React from 'react';
import classes from './bar.module.css';

const Bar = ({
    TotalPrice
}) => {
    return (
        <div className={classes.Bar}>
            <div className={classes.TotalPrice}>{TotalPrice}</div>
            <button className={classes.Button}>去结算</button>
        </div>
    );
};

export default Bar;