import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { User, Mail, Send } from 'lucide-react';

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target;
        const formData = new FormData(form);
        formData.append('access_key', '34a66b07-eacf-4b2c-9836-429a901f88ab');

        const request = fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        }).then(async (response) => {
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Something went wrong. Please try again.');
            }

            return data;
        });

        try {
            await toast.promise(request, {
                pending: 'Sending your message...',
                success: 'Form submitted successfully!',
                error: {
                    render({ data }) {
                        return data?.message || 'Unable to send message.';
                    },
                },
            });

            form.reset();
        } catch (error) {
            console.error('Contact form submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className="px-6 py-20 sm:px-10 lg:px-16 bg-linear-to-b from-white to-slate-50" id="contact">

            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Get In Touch</p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                        Start With Aptech
                    </h2>
                    <p className="mt-2 max-w-2xl mx-auto text-base leading-8 text-slate-600">
                        Acquire what you need to stand out in the digital world. Contact us to learn more about our programs.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">

                    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10 lg:p-12">

                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-950">Ready to transform your career?</h3>
                                    <p className="mt-4 text-slate-600">
                                        Join thousands of students who have launched successful tech careers with Aptech. Our expert mentors and comprehensive curriculum will guide you every step of the way.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                            <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-950">Email Us</p>
                                            <p className="text-sm text-slate-600">aptechsatellite1@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                            <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-950">Call Us</p>
                                            <p className="text-sm text-slate-600">+234 815 852 5619</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Section */}
                            <form onSubmit={onSubmit} className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <p className='mb-2 text-sm font-medium text-slate-950'>Your name</p>
                                        <div className='flex items-center pl-3 rounded-lg border border-slate-300 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20'>
                                            <User className="h-5 w-5 text-slate-400 mr-2" />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder='Enter your name'
                                                required
                                                className='w-full p-3 text-sm outline-none bg-transparent'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <p className='mb-2 text-sm font-medium text-slate-950'>Your Email</p>
                                        <div className='flex items-center pl-3 rounded-lg border border-slate-300 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20'>
                                            <Mail className="h-5 w-5 text-slate-400 mr-2" />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder='Enter your email'
                                                required
                                                className='w-full p-3 text-sm outline-none bg-transparent'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className='mb-2 text-sm font-medium text-slate-950'>Message</p>
                                    <textarea
                                        name="message"
                                        placeholder='Enter your message'
                                        required
                                        rows={5}
                                        className='w-full p-3 text-sm outline-none rounded-lg border border-slate-300 bg-white transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 min-h-32 max-h-80'
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500/20 sm:w-auto cursor-pointer"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <Send className="ml-2 h-4 w-4" />
                                </button>
                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default ContactUs