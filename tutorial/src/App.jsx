import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'


import { createBrowserRouter, BrowserRouter, Routes, Route, Link, createRoutesFromElements } from 'react-router-dom'
import One from './components/One'
import Two from './components/Two'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<One/>}/>
      <Route path='/ugh' element={<Two/>}/>
    </Route>
  )
)

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<One/>}/>
        <Route path='/ugh' element={<Two/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
