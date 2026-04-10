import React from 'react'
import Lincoln from '../assets/images/lincoln.png'
import Middle from '../assets/images/middlesex.png'
import NCC from '../assets/images/ncc.png'
import ISM from '../assets/images/ism.png'
import Bangor from '../assets/images/bangor.png'

const Partners = () => {
    return (
        <div id='partners' className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Our Partners</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted by leading education and industry partners.</h2>
                <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
                    <div className="flex items-center justify-center rounded-3xl border border-slate-700/40 bg-white p-5 shadow-lg shadow-slate-950/20">
                        <img
                            alt="Lincoln University"
                            src={Lincoln}
                            width={158}
                            height={48}
                            className="h-12 w-auto max-w-full object-contain"
                        />
                    </div>

                    <div className="flex items-center justify-center rounded-3xl border border-slate-700/40 bg-white p-5 shadow-lg shadow-slate-950/20">
                        <img
                            alt="MiddleSex University"
                            src={Middle}
                            width={158}
                            height={48}
                            className="h-12 w-auto max-w-full object-contain"
                        />
                    </div>

                    <div className="flex items-center justify-center rounded-3xl border border-slate-700/40 bg-white p-5 shadow-lg shadow-slate-950/20">
                        <img
                            alt="NCC Education"
                            src={NCC}
                            width={158}
                            height={48}
                            className="h-12 w-auto max-w-full object-contain"
                        />
                    </div>

                    <div className="flex items-center justify-center rounded-3xl border border-slate-700/40 bg-white p-5 shadow-lg shadow-slate-950/20">
                        <img
                            alt="ISM University"
                            src={ISM}
                            width={158}
                            height={48}
                            className="h-12 w-auto max-w-full object-contain"
                        />
                    </div>

                    <div className="flex items-center justify-center rounded-3xl border border-slate-700/40 bg-white p-5 shadow-lg shadow-slate-950/20">
                        <img
                            alt="Bangor University"
                            src={Bangor}
                            width={200}
                            height={100}
                            className="h-12 w-auto max-w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners