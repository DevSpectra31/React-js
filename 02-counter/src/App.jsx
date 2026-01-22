import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setcounter]=useState(15)
  const addvalue=()=>{
    console.log("Counter increaded : " ,counter)
    //  counter=counter+1;
    setcounter(counter+1)
  }
  const removevalue=()=>{
    console.log("Counter reduced : ",counter)
    if(counter>0){
      setcounter(counter-1)
    }
  }
  return (
    <>
    <h1>Basics of hooks in react</h1>
    <h2>Counter project</h2>
    <h2>counter values : {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br /> <br />
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
