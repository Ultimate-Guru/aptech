import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import CoursesPage from './CoursesPage'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      <Footer />
    <Whatsapp />
    </BrowserRouter>
  )
}

export default App