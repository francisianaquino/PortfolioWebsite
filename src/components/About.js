import React from "react";
import Logos from "./Logos";
import { Link } from 'react-scroll';

export default function About() {
    return (
        <div id="about" className="bg-custom-gray-700 bg-hero bg-cover bg-center bg-blend-overlay flex h-screen justify-center items-center">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            
                <section className="flex justify-center">
                    {/* <!-- content - start --> */}
                    <div className="lg:w-1/2 flex flex-col items-center text-center">

                        <div className="lg:py-6 xl:py-12">
                            <h1 className="text-green-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                                Hi! I'm Francis,
                            </h1>

                            <p className="text-gray-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                                A Software Developer and a Computer Engineering graduate, with skills and experience in building Web and Mobile Applications, and is currently working as a Software Engineer.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-2.5">
                                <Link to='projects' spy={true} smooth={true} className="inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                                    View My Work
                                </Link>

                                <Link to='contact' spy={true} smooth={true} className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                                    Contact Me
                                </Link>
                            </div>
                        </div>

                        {/* <!-- social - start --> */}
                        <div className="flex justify-center lg:justify-start items-center gap-4 mt-8 sm:mt-16 text-gray-400">
                            <span className="text-sm sm:text-base font-semibold tracking-widest uppercase">Social</span>
                            <span className="w-12 h-px bg-gray-200"></span>

                            <Logos />
                        </div>
                        {/* <!-- social - end --> */}
                    </div>
                    {/* <!-- content - end --> */}
                </section>
            </div>
        </div>
    );
}