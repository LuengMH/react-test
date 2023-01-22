import React from 'react';
import './app.less';
import Meals from './Components/Meals/Meals';


const App = () => {
    return (
        <div className='app-wrap'>
            <Meals />
        </div>
    );
};

export default App;