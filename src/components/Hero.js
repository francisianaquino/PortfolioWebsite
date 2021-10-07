import React from "react";
import {ReactComponent as Gmail} from "../svg/gmail.svg";
import {ReactComponent as Linkedin} from "../svg/linkedin.svg";
import {ReactComponent as Github} from "../svg/github.svg";
import {ReactComponent as Behance} from "../svg/behance.svg";

export default function Hero() {
    return (
        <div id="about" class="bg-custom-gray bg-hero-pattern bg-cover bg-center bg-blend-overlay py-12 sm:py-16 lg:py-24">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                <section class="flex flex-col-reverse lg:flex-row gap-6 sm:gap-10 md:gap-16">
                    {/* <!-- content - start --> */}
                    <div class="xl:w-5/12 flex flex-col justify-between lg:mx-auto">

                        <div class="sm:text-center lg:text-left lg:py-6 xl:py-12">
                            <h1 class="text-green-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                                Hi! I'm Francis,
                            </h1>

                            <p class="text-black-800 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                                A Junior Software Developer, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                                <a href="#" class="inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">View My Work</a>

                                <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact Me</a>
                            </div>
                        </div>

                        {/* <!-- social - start --> */}
                        <div class="flex justify-center lg:justify-start items-center gap-4 mt-8 sm:mt-16">
                            <span class="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">Social</span>
                            <span class="w-12 h-px bg-gray-200"></span>

                            <div class="flex gap-4">
                                <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                    <Gmail class="w-5 h-5"/>
                                </a>

                                <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                    <Linkedin class="w-5 h-5"/>
                                </a>

                                <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                    <Github class="w-5 h-5"/>
                                </a>

                                <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                    <Behance class="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                        {/* <!-- social - end --> */}
                    </div>
                    {/* <!-- content - end --> */}

                    {/* <!-- image - start --> */}
                    <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg lg:mx-auto">
                        <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="by Fakurian Design" class="w-full h-full object-cover object-center" />
                    </div>
                    {/* <!-- image - end --> */}
                </section>
            </div>
        </div>
    );
}