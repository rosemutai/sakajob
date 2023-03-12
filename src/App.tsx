import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-8 bg-grayish min-h-screen">
      <Navbar />
      <Maincontent />
      
    </div>
  )
}

export default App
