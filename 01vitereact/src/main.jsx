import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
function MyAPP(){
  return (
    <div>
      <h1>Custom APP</h1>
    </div>
  )
}
// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:"_blank",
//     },
//     children:'click me to visit google'
// }
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google </a>
)
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
    
)
