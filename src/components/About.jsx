import React from 'react'
import { ShieldCheck, Award, Sparkles } from 'lucide-react'

const stats = [
  {
    title: 'Global Standards, Local Focus',
    description: 'Career-ready technology training with local placements, certifications, and mentoring for Nigerian learners.',
    icon: ShieldCheck,
  },
  {
    title: 'Proven Track Record',
    description: 'Years of experience in training and placement support, with strong employer relationships.',
    icon: Award,
  },
  {
    title: 'Career-First Approach',
    description: 'Practical learning paths, mentorship, and personalised support for success in tech careers.',
    icon: Sparkles,
  },
]

const WhyChoose = () => {
  return (
    <section id="about" className="px-6 py-20 sm:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            Why Choose Aptech?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Proven training, real career support, and world-class outcomes.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our programs combine modern curriculum, practical projects, and placement-focused coaching so learners can move from study to work faster.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.title} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-50 text-orange-600">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default WhyChoose
