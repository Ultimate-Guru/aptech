import React from 'react'
import Courses from './components/Courses'
import Partners from './components/Partners'
import ContactUs from './components/ContactUs'
import { CheckCircle2 } from 'lucide-react'

const shortTermCourses = [
  {
    title: 'MS Office Suite',
    description: 'Master essential Microsoft Office tools including Word, Excel, PowerPoint, and more for professional productivity.',
    duration: '2 months',
    badge: 'Short-Term',
  },
  {
    title: 'Web Design',
    description: 'Learn HTML, CSS, JavaScript, and responsive design principles to create modern websites.',
    duration: '3 months',
    badge: 'Short-Term',
  },
  {
    title: 'Graphics Design',
    description: 'Develop skills in Adobe Creative Suite, visual communication, and digital design techniques.',
    duration: '2 months',
    badge: 'Short-Term',
  },
  {
    title: 'Advanced Digital Marketing',
    description: 'Explore SEO, social media marketing, content strategy, and analytics for online business growth.',
    duration: '4 months',
    badge: 'Short-Term',
  },
  {
    title: 'Web Development',
    description: 'Build complete web applications with frontend and backend technologies, and /deployment.',
    duration: '5 months',
    badge: 'Short-Term',
  },
  {
    title: 'Data Analysis',
    description: 'Learn data visualization, statistical analysis, and tools like Excel, Python, and Tableau.',
    duration: '5 months',
    badge: 'Short-Term',
  },
  {
    title: 'Java Programming Language',
    description: 'Master object-oriented programming with Java, including core concepts and application development.',
    duration: '3 months',
    badge: 'Short-Term',
  },
  {
    title: 'Python Programming Language',
    description: 'Introduction to Python for beginners, covering syntax, data structures, and basic scripting.',
    duration: '2 months',
    badge: 'Short-Term',
  },
  {
    title: 'C++ Programming',
    description: 'Learn C++ fundamentals, memory management, and system-level programming concepts.',
    duration: '2 months',
    badge: 'Short-Term',
  },
  {
    title: 'C# Programming',
    description: 'Develop .NET applications with C#, understanding frameworks and Windows development.',
    duration: '2 months',
    badge: 'Short-Term',
  },
  {
    title: 'UI/UX Design',
    description: 'Design user interfaces and experiences with wireframing, prototyping, and usability principles.',
    duration: '2 months',
    badge: 'Short-Term',
  },
]

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
      <section id="short-term-courses" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Short-Term Programs</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Quick Skills for Fast Career Growth</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">Accelerate your career with our intensive short-term courses designed for rapid skill acquisition and immediate employability.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {shortTermCourses.map((course) => (
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
      <Partners />
      <ContactUs />
    </main>
  )
}

export default CoursesPage