import { useState, useEffect, useContext } from 'react';
import { ImageContext } from './App.jsx';

export const ImageComponent = () => {
    //image data
    const { imageData } = useContext(ImageContext);
    const {randomId, setRandomId} = useState(null);
  
   useEffect(() => {
    if (imageData.length > 0) {
    const random = Math.floor(Math.random() * imageData.length)
    setRandomId(imageData[random].id);
    }
   }, [imageData]
   )
  
    return (
        <div>
         {randomId !== null ? <span>{randomId}</span> : <span>Loading...</span>}
        </div>
    )
  
  }

  export default ImageComponent;