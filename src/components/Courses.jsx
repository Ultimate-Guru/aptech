import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const courses = [
  {
    title: 'Advanced Diploma in Software Engineering (ADSE)',
    description: 'Full-stack JavaScript, modern frameworks, backend APIs, and cloud deployment.',
    duration: '12 months',
    badge: 'Best Seller',
  },
  {
    title: 'Computer Professional in Information Systems Management (CPISM)',
    description: 'Systems strategy, business applications, and enterprise technology management.',
    duration: '9 months',
    badge: 'Industry Ready',
  },
  {
    title: 'Networking & Cybersecurity',
    description: 'SecOps fundamentals, network defense, and secure infrastructure skills.',
    duration: '8 months',
    badge: 'High Demand',
  },
  {
    title: 'Data Science and Artificial Intelligence',
    description: 'Data analytics, machine learning, and AI tools for business insights.',
    duration: '10 months',
    badge: 'Future Skills',
  },
]

const Courses = () => {
  return (
    <section id="courses" className="px-6 py-20 sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Our Featured Courses</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Learn the skills employers need today.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">Choose a career path backed by hands-on training, project work, and employer-relevant outcomes.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title} className="group overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">{course.badge}</span>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{course.duration}</span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{course.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{course.description}</p>
              <a href="#contact">
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-orange-600">
                  Enroll now <CheckCircle2 className="h-5 w-5" />
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Courses
