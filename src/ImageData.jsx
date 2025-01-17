import { createContext, useState } from 'react';

//create context
export const ImageContext = createContext([]);

//create provider
export const ImageProvider = ( {children} ) => {
    const [imageData, setImageData] = useState(
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
    ]);
    return (
        <ImageContext.Provider value={{ imageData, setImageData }}>
            {children}
        </ImageContext.Provider>
    )

}