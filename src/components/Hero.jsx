import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 pb-20 pt-20 sm:px-10 lg:px-16">

            <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                <div className="max-w-2xl space-y-6">
                    <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                        Launch Your Tech Career in 6–12 Months
                    </span>
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Transform from beginner to <span className="text-orange-600">industry-ready professional</span>
                    </h1>
                    <p className="max-w-xl text-lg leading-8 text-slate-600">
                        Learn hands-on technology skills with career support, certifications, and real project experience built for students and working professionals.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link to="/courses" className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 cursor-pointer">
                            Explore Courses
                            <ArrowRight className="ml-3 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                            <p className="text-3xl font-semibold text-slate-950">100%</p>
                            <p className="mt-2 text-sm text-slate-500">Practical curriculum</p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                            <p className="text-3xl font-semibold text-slate-950">25+</p>
                            <p className="mt-2 text-sm text-slate-500">Expert mentors</p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                            <p className="text-3xl font-semibold text-slate-950">4.9/5</p>
                            <p className="mt-2 text-sm text-slate-500">Student satisfaction</p>
                        </div>
                    </div>

                </div>

                <div className="hidden lg:block relative max-w-xl rounded-4xl bg-slate-950/95 px-8 py-10 text-white shadow-2xl shadow-slate-950/10 sm:px-10">
                    <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl" />
                    <div className="absolute right-6 top-0 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="relative space-y-6">
                        <div className="rounded-3xl bg-slate-900/95 p-6 ring-1 ring-white/10">
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured Course</p>
                            <h2 className="mt-3 text-2xl font-semibold">Advanced Diploma in Software Engineering</h2>
                            <p className="mt-4 text-sm leading-6 text-slate-300">Build full-stack applications with JavaScript, React, Node, databases, and cloud-ready deployment.</p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-900/95 p-4 ring-1 ring-white/10">
                                <p className="text-2xl font-semibold">5</p>
                                <p className="mt-2 text-sm text-slate-400">Industry partners</p>
                            </div>
                            <div className="rounded-3xl bg-slate-900/95 p-4 ring-1 ring-white/10">
                                <p className="text-2xl font-semibold">12</p>
                                <p className="mt-2 text-sm text-slate-400">Months to completion</p>
                            </div>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Career outcomes</p>
                            <ul className="mt-4 space-y-3 text-sm text-slate-300">
                                <li>Software Engineer</li>
                                <li>Cybersecurity Analyst</li>
                                <li>Data Science Specialist</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero
