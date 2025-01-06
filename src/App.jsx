import { useState } from 'react'
import CardComponent from './card.jsx'
import ImageComponent  from './Fetch.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <CardComponent
      color={'blue'}
      />
     
      
      

    </div>


    
  )
}

export default App
