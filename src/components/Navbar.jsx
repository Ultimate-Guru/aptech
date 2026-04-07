import React from 'react'
import { NavLink } from 'react-router-dom'
// import design from '../assets/images/design.jpg'
import Logo from '../assets/images/Logo.jpg'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

                <a href="#">
                    <img src={Logo} alt="Aptech's Logo" className='w-32 sm:w-40' loading='lazy' />
                </a>
                <nav className="hidden items-center gap-8 md:flex text-sm font-semibold text-slate-700">
                    <a href="#about" className="transition hover:text-slate-950">About Us</a>
                    <a href="#courses" className="transition hover:text-slate-950">Courses</a>
                    <a href="#partners" className="transition hover:text-slate-950">Partners</a>
                    <a href="#faq" className="transition hover:text-slate-950">FAQs</a>
                </nav>

                <a href="#contact" className="hidden rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 md:inline-flex cursor-pointer">
                    Book A Call
                </a>
            </div>

        </header>
    )
}

export default Navbar