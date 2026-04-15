import React from 'react'
import Courses from './components/Courses'
import Partners from './components/Partners'
import ContactUs from './components/ContactUs'

const CoursesPage = () => {
  return (
    <main>
      <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Our Programs</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Choose Your Tech Career Path</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Discover our comprehensive IT training programs designed to transform you from beginner to industry-ready professional.
            </p>
          </div>
        </div>
      </section>
      <Courses />
      <Partners />
      <ContactUs />
    </main>
  )
}

export default CoursesPage