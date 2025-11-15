import { useState } from 'react'
import { createRoot } from 'react-dom/client'
function App() {
  const [count, setCount] = useState(0)
const username='vineet'
  return (
    <>
    <h1>vite React App{2+2}</h1>
    <h1>vite react app{username}</h1>
    </>
  )
}
export default App
