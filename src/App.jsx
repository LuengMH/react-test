import React, { useState, useEffect } from 'react';
import './app.less';
import Meals from './Components/Meals/Meals';
import MockData from './mockData';
import CartContext from './Components/store/cart-context';


const App = () => {
    const [mealData, setMealData] = useState(null);
    const [shopCartData, setShopCartData] = useState({
        item: [],
        totalAmount: 0,
        totalPrice: 0
    });

    useEffect(() => {
        setMealData(MockData)
    }, [])

    // 添加商品
    const addMealHandler = (meal) => {
        // 对之前的商品浅复制一下
        const newCart = { ...shopCartData };
        // 判断购物车里是否存在该商品
        if (newCart.item?.indexOf(meal) === -1) {
            // 如果不存在，将商品添加在购物车中
            newCart.item.push(meal);
            // 把商品数量改成1
            meal.amount = 1;
            // console.log(meal.amount)
        } else {
            // 如果商品已经存在，则该商品的数量加1
            meal.amount += 1;
        }
        // 增加总数
        newCart.totalAmount += 1;
        // 增加总金额
        newCart.totalPrice += meal.price;

        setShopCartData(newCart);


        // // 浅复制商品数据
        // const newMeal = [...mealData];
        // // 找到当前购买商品的index通过id寻找
        // const index = newMeal.findIndex((item) => {
        //     // console.log(item.id, meal.id);
        //     return item.id === meal.id
        // });

        // // console.log(index)
        // // 只要点击了添加，商品数量永远+1
        // meal.amount += 1;
        // // 通过splice方法替换
        // const newMealList = newMeal.splice(index, 1, meal)
        // setShopCartData(newMealList)
    }

    // 减少商品
    const subMealHandler = (meal) => {
        // 复制购物车
        const newCart = { ...shopCartData };
        // 减少商品的数量
        meal.amount -= 1;

        // 判断该商品数量是否为零
        if (meal.amount === 0) {
            // 从购物车中移除商品
            // newCart.items.splice(newCart.items.indexOf(meal), 1);
            newCart.item.splice(newCart.item.indexOf(meal), 1)
        }
        // 修改商品总数和总金额
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;
        setShopCartData(newCart);
    }

    if (!mealData) return;
    return (
        <CartContext.Provider value={{addMealHandler, subMealHandler}}>
            <div className='app-wrap'>
                <Meals
                    mealData={mealData}
                />
            </div>
        </CartContext.Provider>
    );
};

export default App;