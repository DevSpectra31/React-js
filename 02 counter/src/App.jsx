import { useState } from 'react'
import "./App.css"
import { use } from 'react'
function App() {
  let Count=1
  let [Counter,setCounter]=useState(1)
  const addValue=()=>{
    setCounter(Counter+1)
  }
  const RemoveValue=()=>{
    setCounter(Counter-1)
  }
  return (
    <>
       <h1>React course with Hittesh{Counter}</h1>
       <h2>Counter Value : {Counter} </h2>
       <button onClick={addValue}>Add value</button>
       <button onClick={RemoveValue}>remove value </button>
       <p>footer : </p>
    </>
  )
}

export default App
