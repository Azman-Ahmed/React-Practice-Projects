import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import TemplatesTable from './TemplatesTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <TemplatesTable />
      </div>
    </div>
  )
}

export default App
