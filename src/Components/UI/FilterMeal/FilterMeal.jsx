import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './filterMeal.module.css';


// 输入文字触发事件
const inputChangeHandler = (e, setKeyword) => {
    // console.log(e.target.value);
    const keyWord = e.target.value.trim();
    setKeyword(keyWord);
}

// 点击搜索触发事件
const iconCclickHandler = (keyWord, onFilter) => {
    onFilter(keyWord);
}

// 点击回车时，触发事件
const keyDownHandler = (e, keyWord, onFilter) => {
    if (e.keyCode === 13) {
        // console.log(keyWord)
        onFilter(keyWord);
    }
}

const FilterMeal = ({
    onFilter
}) => {
    const [keyWord, setKeyword] = useState('');
    return (
        <div className={classes.FilterWrap}>
            <div className={classes.inputOuter}>
                <input
                    placeholder='请输入关键字'
                    className={classes.input}
                    onChange={(e) => inputChangeHandler(e, setKeyword)}
                    onKeyUpCapture={(e) => keyDownHandler(e, keyWord, onFilter)}
                    />
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.icon}
                    onClick={() => iconCclickHandler(keyWord, onFilter)}
                    />
            </div>
        </div>
    );
};

export default FilterMeal;