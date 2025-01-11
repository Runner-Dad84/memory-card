import React, { useState } from 'react';
import ImageComponent  from './Fetch.jsx'





/*

export const ApiData = () => { 
    return useState (
    [
        { id: '7970076', clicked: false },
        { id: '1483681', clicked: false },
        { id: '789501', clicked: false },
        { id: '3619698', clicked: false },
        { id: '2245743', clicked: false },
        { id: '3584313', clicked: false },
        { id: '3619698', clicked: false },
        { id: '4406410', clicked: false },
        { id: '7170837', clicked: false },
        { id: '6566978', clicked: false },
        { id: '5386820', clicked: false },
        { id: '5588005', clicked: false },
        { id: '453164', clicked: false },
        { id: '5693094', clicked: false },
        { id: '6907857', clicked: false },
        { id: '5570684', clicked: false} ,
        { id: '7417091', clicked: false },
        { id: '7264439', clicked: false },
    ]
    );
};



*/


const CardComponent = ( {color} ) => {
    const [click, setclick] = useState(false)
    
    const select = () => {
        if (click === false){
            setclick(true)
            console.log('selected')
        };
        if (click === true){
            console.log('game over')
        }
    }

    return (
        <button
         className='cardBtn'
         onClick={select}
        >
        <div className= 'image-container'>
            <ImageComponent/>
        </div>
       
        </button>
    )
}

export default CardComponent;