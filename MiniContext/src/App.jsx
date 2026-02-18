/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Contexts/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
      <h1>Context API in react is very useful concept for data transfer</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
