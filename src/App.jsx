import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <div style={{color:"blue", display:"flex", justifyContent:"center", alignItems:"center", fontFamily:"monospace", height:"100vh", fontSize:"2.5rem", flexDirection:"column"}}> 
        <h2>This is a practice <u>React app</u> for deployment on Github pages</h2>
        <h2 style={{color:"#00ff00"}}>Deployment Status : SUCCESS</h2>
        <h2>Now this process of <b style={{fontWeight:"800"}}>Deployment</b> is <u>Automated</u> using <span style={{color:"red"}}>Git Actions YAML Script</span></h2>
    </div>
  )
}

export default App
