import React, {useState, useEffect} from 'react';
import './app.less';
import Meals from './Components/Meals/Meals';
import MockData from './mockData';


const App = () => {
    const [mealData, setMealData] = useState(null)


    useEffect(() => {
        setMealData(MockData)
    }, [])

    if(!mealData) return;
    return (
        <div className='app-wrap'>
            <Meals mealData={mealData} />
        </div>
    );
};

export default App;