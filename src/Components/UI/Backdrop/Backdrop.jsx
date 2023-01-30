import React from 'react';
import classes from './backdrop.module.css';
import ReactDOM from 'react-dom';

// 获取跟元素
const BackDropRoot = document.getElementById('backdrop');
console.log(BackDropRoot)

const Backdrop = (props) => {

    return ReactDOM.createPortal(
        <div className={`${classes.Backdrop} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>,
        BackDropRoot
    );
};

export default Backdrop;