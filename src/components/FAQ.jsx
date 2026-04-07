import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    { question: 'What does ADSE stand for?', answer: 'ADSE stands for Advanced Diploma in Software Engineering, a program for modern full-stack development skills.' },
    { question: 'How long does the ADSE program last?', answer: 'The ADSE program typically runs for 12 months, combining classroom learning, practical projects, and career coaching.' },
    { question: 'What topics are covered in the ADSE curriculum?', answer: 'The curriculum covers JavaScript, React, Node.js, databases, DevOps, and professional software development practices.' },
    { question: 'What is the duration of the CPISM program?', answer: 'The CPISM program runs for about 9 months and focuses on information systems management and enterprise technology skills.' },
    { question: 'Do I need any prior certification to enroll?', answer: 'No prior certification is required; we accept beginners and career changers with strong motivation.' },
]

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section id="faq" className="px-6 py-20 sm:px-10 lg:px-16">

            <div className="mx-auto max-w-7xl">

                <div className="mb-12 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">FAQs</p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Got questions? We have answers.</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="rounded-4xl border border-slate-200 bg-white shadow-sm transition-all duration-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                                <ChevronDown
                                    className={`h-6 w-6 shrink-0 text-orange-600 transition-transform duration-300 ${
                                        activeIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {activeIndex === index && (
                                <div className="overflow-hidden">
                                    <p className="border-t border-slate-200 px-6 py-4 text-sm leading-7 text-slate-600 animate-in fade-in duration-300">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default FAQ
