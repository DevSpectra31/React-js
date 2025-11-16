import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    Name:"Raj",
    age:21,
    address:{
      city:"Lucknow",
      state:"U.P",
      country:"India",
    }

  }
  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with talwind</h1>
     <Card username="Vineet" post='Mern stack Developer' />
     <Card username='Ram' post='System Enginner'/>
     <Card username='Rohan' post='Java Developer'/>
    </>
  )
}

export default App
