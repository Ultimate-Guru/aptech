import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Partners />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App