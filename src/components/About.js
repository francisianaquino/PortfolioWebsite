import React from "react";
import Logos from "./Logos";

export default function About() {
    return (
        <div id="about" class="bg-custom-gray-700 bg-hero bg-cover bg-center bg-blend-overlay h-screen">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto flex items-center h-full">
            
                <section class="flex flex-col items-center">
                    {/* <!-- content - start --> */}
                    <div class="lg:w-1/2 flex flex-col items-center text-center">

                        <div class="lg:py-6 xl:py-12">
                            <h1 class="text-green-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                                Hi! I'm Francis,
                            </h1>

                            <p class="text-gray-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                                A Junior Software Developer, and a Computer Engineering graduate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div class="flex flex-col sm:flex-row justify-center gap-2.5">
                                <a href="#projects" class="inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">View My Work</a>

                                <a href="#contact" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact Me</a>
                            </div>
                        </div>

                        {/* <!-- social - start --> */}
                        <div class="flex justify-center lg:justify-start items-center gap-4 mt-8 sm:mt-16 text-gray-400">
                            <span class="text-sm sm:text-base font-semibold tracking-widest uppercase">Social</span>
                            <span class="w-12 h-px bg-gray-200"></span>

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