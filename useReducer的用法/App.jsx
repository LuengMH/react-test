import React, { useReducer } from 'react';


const contReduce = (state, action) => {
    console.log(state, action)
    switch (action) {
        case 'add':
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
    }
}

// 点击增加
const addHandler = (fn) => {
    fn.countDispatch('add')
}

// 点击减少
const subHandler = (fn) => {
    fn.countDispatch('sub')
}
const App = () => {
    const [count, countDispatch] = useReducer(contReduce, 1)
    const fn = {
        countDispatch
    };
    return (
        <div style={{ fontSize: '20px', width: 200, height: 200, backgroundColor: '#bfa', textAlign: 'center', margin: '50px auto' }}>
            <button onClick={() => addHandler(fn)}>增加</button>
            {count}
            <button onClick={() => subHandler(fn)}>减少</button>
        </div>
    );
};

export default App;