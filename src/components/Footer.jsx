import React from 'react'
import { Link } from 'react-router-dom'
import TikTok from '../assets/images/tok.png'
import Instagram from '../assets/images/insta.png'
import { MailIcon, PhoneCallIcon, Calendar, } from 'lucide-react'

const Footer = () => {

  const socialLinks = [
    {
      href: 'https://www.tiktok.com/@aptech_satellite',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v12.7a2.85 2.85 0 1 1-5.92-2.86 2.87 2.87 0 0 1 2.31 1.08V9.4a6.15 6.15 0 1 0 10.86 3.28v-5.09a4.82 4.82 0 0 0 3.36 1.31v-3.83a4.9 4.9 0 0 1-.36-.04z" fill="currentColor" />
      </svg>,
      alt: 'TikTok'
    },
    {
      href: 'https://www.instagram.com/aptechsatellite',
      icon: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
      </svg>,
      alt: 'Instagram'
    },
  ];

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
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm text-slate-400">
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
            <ul className="mt-3  space-y-2">
              <li><a href="#about" className="transition">About Us</a></li>
              <li><Link to="/courses" className="transition">Courses</Link></li>
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

      <hr className='border-gray-300 dark:border-gray-600 my-10 mx-10' />

      <div className='mx-auto max-w-7xl text-sm flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p className='mt-4'>Copyright 2026 &copy; Aptech Satellite Town - All Right Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          {
            socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg active:bg-zinc-50/50"
              >
                {icon}
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
