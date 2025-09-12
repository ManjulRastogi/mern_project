import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import { Routes, Route } from 'react-router-dom'
import AddTask from './component/AddTask'
import Navbar from './component/NavBar'
import List from './component/List'

function App() {
 

  return (
    <>
      <Navbar/>
      
      <Routes>
      <Route path="/List" element={<List/>} />
      <Route path="/AddTask" element={<AddTask/>} />
      </Routes>
    </>
  )
}

export default App
