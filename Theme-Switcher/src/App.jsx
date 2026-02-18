import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'

function App() {
  const [themeMode, setThemeMode] = useState(0)
  const [lighTheme, setLightTheme] = useState(0)
  const [darkTheme, setDarkTheme] = useState(0)
  return (
   <ThemeProvider value={{themeMode,lighTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*theme button*/}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card*/}
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
