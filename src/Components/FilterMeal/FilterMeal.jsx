import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './filterMeal.module.css';


// 输入文字触发事件
const inputChangeHandler = (e, setKeyword) => {
    const keyWord = e.target.value.trim();
    setKeyword(keyWord);
}

// 点击搜索触发事件
const iconClickHandler = (keyWord, onFilter) => {
    onFilter(keyWord);
}

// 点击回车时，触发事件
const keyDownHandler = (e, keyWord, onFilter) => {
    if (e.keyCode === 13) {
        onFilter(keyWord);
    }
}

const FilterMeal = ({
    onFilter
}) => {
    const [keyWord, setKeyword] = useState('');

    useEffect(() => {
        const timer = setTimeout(()=> {
            // console.log(444)
            onFilter(keyWord);
        }, 1000)

        
        return () => {
            // console.log('1111')
            clearTimeout(timer);
        }
    }, [keyWord])
    return (
        <div className={classes.FilterWrap}>
            <div className={classes.inputOuter}>
                <input
                    value={keyWord}
                    placeholder='请输入关键字'
                    className={classes.input}
                    onChange={(e) => inputChangeHandler(e, setKeyword)}
                    onKeyUpCapture={(e) => keyDownHandler(e, keyWord, onFilter)}
                    />
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.icon}
                    onClick={() => iconClickHandler(keyWord, onFilter)}
                    />
            </div>
        </div>
    );
};

export default FilterMeal;