import { useState } from 'react'

import ImageComponent  from './Fetch.jsx'
import './App.css'

function App() {
  const [selected, setSelected ] = useState([]);
  
  const imageIds = ['7970076', '1483681', '789501', '3619698', '2245743', '3584313', '7417091', '4406410', '7170837', '6566978']
  function randomize (array) {
    let shuffled = [...array]
    for (let i = array.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled [i], shuffled [j]] = [shuffled [j], shuffled [i]]
    }
    return shuffled;
  }
  const shuffledArray = randomize(imageIds);

  const pickCount = selected.length;

  //Maps image component for image array
  const images = shuffledArray.map((id) =>
    <ImageComponent 
      key={id * Math.random()} 
      id={id}
      setSelected={setSelected}
   />
  )
  return (
    <div>
      {images}
      {`Unique Images Picked: ${pickCount}`}
    </div>  
  )
}

export default App
