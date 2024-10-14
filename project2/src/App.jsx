import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moduleName from 'module'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Contact_form from './components/Contact_form/Contact_form'

function App() {
  return(
    <div>
      <Navigation/>
      <div className='main-container'>
        <ContactHeader/>
        <Contact_form/>
      </div>
    </div>

  )
}

export default App
