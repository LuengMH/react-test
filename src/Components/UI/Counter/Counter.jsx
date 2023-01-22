import React from 'react';
import classes from './counter.module.css';
// 引入字体图标 fontawesone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/*
*   引入FontAwesome
*       - 安装依赖
*           npm i --save @fortawesome/fontawesome-svg-core
            npm i --save @fortawesome/free-solid-svg-icons
            npm i --save @fortawesome/free-regular-svg-icons
            npm i --save @fortawesome/react-fontawesome@latest

            yarn add @fortawesome/react-fontawesome@latest @fortawesome/free-regular-svg-icons @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons

        - 引入组件
               import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
        - 引入图标
                import {faPlus} from "@fortawesome/free-solid-svg-icons";
        - 使用组件
                <FontAwesomeIcon icon={faPlus}/>
*
* */

const Counter = (props) => {
    return (
        <div className={classes.Counter}>
            {
                (props.amount > 0 && props.amount !== 0) ? (
                    <>
                        <button className={classes.Less}><FontAwesomeIcon icon={faMinus} /></button>
                        <span className={classes.Count}>{props.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.Add}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Counter;