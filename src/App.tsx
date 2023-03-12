import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-8 bg-grayish min-h-screen">
      <Navbar />
      
    </div>
  )
}

export default App
