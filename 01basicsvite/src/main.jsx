import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

const Reactelement = (
  <a href="http://www.google.com" target="_blank">
    Click me to visit Google
  </a>
);
const areactElement=React.createElement(
    'a',
    {href:"http://www.google.com",target:"_blank"},
    'click to visit google'
)

function MyApp() {
  return areactElement;
}
createRoot(document.getElementById('root')).render(<MyApp/>);
