import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const start = new Date("Jan 23, 2023 00:00:00").getTime(); // Jan 1, 2015
  const end = new Date("Jun 23, 2023 00:00:00").getTime(); // June 24, 2015
  const today = new Date().getTime();
  const p = Math.round(((today - start) / (end - start)) * 100);

  return (
    <div className="outside-container">
      <div className='inside-container' style={{width: `${p}%`}}>
        <img src="/images/Icon.png" alt="Gengar Icon" />
      </div>
    </div>
  )
}

export default App
