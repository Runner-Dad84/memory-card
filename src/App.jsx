import { useState } from 'react'
import CardComponent from './card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <CardComponent
      color={'blue'}
      />
      <CardComponent
      color={'red'}
      />
      <CardComponent
      color={'yellow'}
      />

    </div>


    
  )
}

export default App
