import { useState } from 'react'

import ImageComponent  from './Fetch.jsx'
import './App.css'

function App() {
  const [selected, setSelected ] = useState([]);
  
  const imageIds = ['7970076', '1483681', '789501', '3619698', '2245743', '3584313', '3619698', '4406410', '7170837', '6566978']
  function randomize (array) {
    for (let i = array.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * i + 1);
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }
  const randomArray = randomize(imageIds);


  const images = randomArray .map((id) =>
    <ImageComponent 
      key={id} 
      id={id}
      setSelected={setSelected}
   />
  )

//setimageID(ImageIds[Math.floor(Math.random() * ImageIds.length)].id);

  return (
    <div>
      {images}
      {selected}
    </div>  
  )
}

export default App
