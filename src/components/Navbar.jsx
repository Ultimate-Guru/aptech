import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/50 backdrop-blur-xl">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

                <Link to="/">
                    <img src={Logo} alt="Aptech's Logo" className='w-32 sm:w-40' loading='lazy' />
                </Link>
                <nav className="hidden items-center gap-8 md:flex font-semibold text-slate-700">
                    <Link to="/" className="transition hover:text-slate-950">Home</Link>
                    <Link to="/courses" className="transition hover:text-slate-950">Courses</Link>
                    <a href="#partners" className="transition hover:text-slate-950">Partners</a>
                    <a href="#faq" className="transition hover:text-slate-950">FAQs</a>
                </nav>

                <a href="#contact" className="hidden rounded-full bg-orange-600 px-6 py-3  font-semibold text-white transition hover:bg-orange-700 md:inline-flex cursor-pointer">
                    Book A Call
                </a>


                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} className="h-8 cursor-pointer" />
                </div>

                {/* Mobile Navigation Menu */}
                <div className="fixed inset-0 z-40 md:hidden" onClick={handleNav}>
                    <div
                        className={`fixed top-0 right-0 h-screen w-[70%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                            {/* Close Icon */}
                            <div className="flex justify-end pt-8 pr-6">
                                <AiOutlineClose size={25} className="cursor-pointer" onClick={handleNav} />
                            </div>

                            {/* Mobile Navigation Items */}
                            <nav className="flex flex-col mt-8 px-6 space-y-5 font-semibold text-lg text-slate-700">
                                <NavLink
                                    className={({ isActive }) => `font-semibold transition ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-slate-950'}`}
                                    to="/"
                                    onClick={handleNav}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `font-semibold transition ${isActive ? 'text-orange-600' : 'text-slate-700 hover:text-slate-950'}`}
                                    to="/courses"
                                    onClick={handleNav}
                                >
                                    Courses
                                </NavLink>
                                <a
                                    href="#partners"
                                    className="font-semibold text-slate-700 transition hover:text-slate-950"
                                    onClick={handleNav}
                                >
                                    Partners
                                </a>
                                <div className="pt-4">
                                    <a
                                        href="#contact"
                                        onClick={handleNav}
                                        className="block w-full rounded-full bg-orange-600 px-6 py-3 text-center text-lg font-semibold text-white transition hover:bg-orange-700 cursor-pointer"
                                    >
                                        Book A Call
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>

            </div>
        </header>
    )
}

export default Navbar