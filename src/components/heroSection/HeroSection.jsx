import React from 'react'
import { Link } from "react-router-dom";
export const HeroSection = () => {
    return (
        <div className="hero bg-base-100">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={"clipPath: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}></div> */}
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Data to enrich your online business</h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-primary sm:text-xl/8">Our Ready to Cook range carries a variety of popular chicken products from the desi Chicken Chapli Kabab to the kids favorite Chicken Jungle Fun Nuggets; All of which can be quickly cooked with a light splash of oil or air fried.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link  className="rounded-md bg-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
