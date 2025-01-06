import React, { useState } from 'react';
import ImageComponent  from './Fetch.jsx'


const CardComponent = ( {color} ) => {
    const [click, setclick] = useState(false)
    
    const select = () => {
        if (click === false){
            setclick(true)
        };
        if (click === true){
            console.log('game over')
        }
    }

    return (
        <button
         className='cardBtn'
        >
        <ImageComponent
      />
        </button>
    )
}

export default CardComponent;