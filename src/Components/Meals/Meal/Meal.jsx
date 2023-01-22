import React from 'react';
import './meal.less';

const Meal = () => {
    return (
        <div className='meal-wrap'>
            <div className='meal-img-wrap'>
                <img src="/img/meals/1.png" alt="" />
            </div>
            <div className='meal-desc-wrap'>
                <h2 className='meal-desc-title'>汉堡包</h2>
                <p className='meal-desc-font'>百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！</p>
            </div>
        </div>
    );
};

export default Meal;