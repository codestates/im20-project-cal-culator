import React from 'react';
import Search from './Search'
import FoodImage from './Consumed-food-image'
import Cart from './Consumed-food-cart'


const Calculator = () => {
    return (
        <div>
            <div>
                <Search />
            </div>
            <div className='food'>
                <FoodImage />
            </div>
            <div className='cart'>
                <Cart />
            </div>
        </div>
    )
}

export default Calculator;