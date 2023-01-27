import React, {useContext} from 'react';
import classes from './counter.module.css';
// 引入字体图标 fontawesone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/cart-context';

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

    const ctx = useContext(CartContext)

    // 点击添加按钮的事件
    const addButtonHandler = () => {
        // props.onAdd(props.meal);
        ctx.addMealHandler(props.meal);
    }

    // 点击添加按钮的事件
    const subButtonHandler = () => {
        // props.onSub(props.meal);
        ctx.subMealHandler(props.meal);
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount > 0 && props.meal.amount !== 0) ? (
                    <>
                        <button onClick={subButtonHandler} className={classes.Less}><FontAwesomeIcon icon={faMinus} /></button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }
            <button
                className={classes.Add}
                onClick={addButtonHandler}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;