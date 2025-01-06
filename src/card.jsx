import React, { useState } from 'react';
import ImageComponent  from './Fetch.jsx'


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