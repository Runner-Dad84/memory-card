import { useState } from 'react'

import ImageComponent  from './Fetch.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
    </div>


    
  )
}

export default App
