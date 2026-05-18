import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Partners />
      <FAQ />
      <Contact />
    </main>
  )
}

export default Home