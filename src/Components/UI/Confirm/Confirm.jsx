import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './confirm.module.css';

const Confirm = ({
    cancelHandler,
    okHandler
}) => {

    const CancelHandler = (e) => {
        e.stopPropagation()
        cancelHandler()
    }

    const Okhandler = (e) => {
        okHandler();
        e.stopPropagation()
    }

    return (
        <Backdrop
            className={classes.ConfirmOuter}
            onClick={(e) => CancelHandler(e) }
            >
            <div className={classes.Confirm}>
                <p className={classes.Context}>确认清空购物车吗?</p>
                <div className={classes.Button}>
                    <button onClick={(e) => CancelHandler(e)} className={classes.Cancel}>取消</button>
                    <button onClick={(e) => Okhandler(e)} className={classes.Ok}>确认</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;