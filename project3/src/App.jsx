import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiceFront from './DiceFront/DiceFront'
import Play from './Play/Play'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(0);

  const toggleGame = () =>{
    setIsGameStarted((previous) => !previous);
  }

  return (
    <div>
      {isGameStarted ? <Play/> : <DiceFront toggle={toggleGame}/>}
    </div>
  )
}

export default App
