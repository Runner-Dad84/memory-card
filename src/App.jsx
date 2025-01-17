import { useState } from 'react'

import ImageComponent  from './Fetch.jsx'
import './App.css'

function App() {
  const [selected, setSelected ] = useState([]);
  
  const imageIds = ['7970076', '1483681', '789501', '3619698', '2245743', '3584313', '3619698', '4406410', '7170837', '6566978', ]
  const images = imageIds.map((id) =>
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
