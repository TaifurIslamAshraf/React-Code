import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Component/Pages/Blog'
import Contact from './Component/Pages/Contact'
import Error from './Component/Pages/Error'
import Home from './Component/Pages/Home'
import Navbar from './Component/Pages/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App