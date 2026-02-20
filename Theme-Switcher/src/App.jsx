/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useTheme, { ThemeProvider } from './Contexts/Theme'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'
function App() {
    const [themeMode,setThemeMode]=useState('light')
const lightTheme=()=>{
    setThemeMode('light')
}
const darkTheme=()=>{
    setThemeMode('dark')
}
// actual change in theme
useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    <document.querySelector('html').classList.add(themeMode)
},[themeMode])
  return (
//     <h1 className="text-black dark:text-red-500 text-3xl">
//   TEST DARK
// </h1>

    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
 <div className="flex flex-wrap min-h-screen items-center ">
                 <div className="w-full">
                     <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         <ThemeButton/>
                     </div>
                     <div className="w-full max-w-sm mx-auto ">
                        <Card/>
                     </div>
                 </div>
             </div>
             </ThemeProvider>
  )
}

export default App;
