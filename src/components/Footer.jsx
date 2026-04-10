import React from 'react'
import { NavLink } from 'react-router-dom'
import { MailIcon, PhoneCallIcon, Calendar } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-4xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/10 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Ready to transform your tech career?</p>
            <h2 className="mt-4 text-3xl font-semibold">Start your journey with Aptech today.</h2>
          </div>
          <a href="#contact" className="mt-8 inline-flex rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-700 sm:mt-0 whitespace-nowrap">
            Book a Free Consultation
          </a>
        </div>
        <div className="mt-10 grid gap-8 text-sm text-slate-400 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-white">Aptech Satellite</p>
            <p className="flex gap-2 mt-3 mb-2">
              <MailIcon className='h-4 w-4 text-orange-600' />
              aptechsatellite1@gmail.com
            </p>
            <p className="flex gap-2 mt-1">
              <PhoneCallIcon className='h-4 w-4 text-orange-600' />
              +234 815 852 5619 || +234 9021 904 962
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#about" className="transition">About Us</a></li>
              <li><a href="#courses" className="transition">Courses</a></li>
              <li><a href="#partners" className="transition">Partners</a></li>
              <li><a href="#faq" className="transition">FAQs</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Open Hours</p>
            <p className="flex gap-2 mt-3">
              <Calendar className='h-4 w-4 text-orange-600' />
              Mon - Fri: 9am - 5pm
            </p>
            <p className="flex gap-2 mt-1">
              <Calendar className='h-4 w-4 text-orange-600' />
              Sat: 9am - 2pm
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
