import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myObj={
  username:"vineet",
  age:18,
}
let myArr=[1,2,3,4,5,6];
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Talwind CSS TEST</h1>
    <Card channel = "Vineet" obj={myObj} Arr={myArr}/> 
    <Card/>
    </>
  )
}

export default App
