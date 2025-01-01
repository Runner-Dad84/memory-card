import React, { useState } from 'react';

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
         onClick = {select}
        >
            <img src="" alt={color} />

        </button>
    )
}

export default CardComponent;