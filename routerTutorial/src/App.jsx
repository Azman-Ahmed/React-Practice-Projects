import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import One from './One/One'
import Onet from './One/Onet'

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/about">Areh</NavLink>
      <NavLink to="/">Ohho</NavLink>
      <main>
          <Routes>
          <Route path='/' element={<One/>}/>
            <Route path='/about' element={<Onet/>}/>
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
