import React from 'react'

const partners = ['Lincoln University', 'MiddleSex University', 'BanGor University', 'ISM', 'NCC']

const Partners = () => {
    return (
        <section id="partners" className="bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">

            <div className="mx-auto max-w-7xl">

                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Our Partners</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted by leading education and industry partners.</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {partners.map((name) => (
                        <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-sm">
                            {name}
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Partners
