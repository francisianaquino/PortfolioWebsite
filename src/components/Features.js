import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";

export const experiences = [
    {
        description: ["Works in the development of an E-Commerce SaaS project", "Integrates e-commerce APIs like WooCommerce API, Lazada Open Platform, and Shopee Open Platform"], image: "",
        position: "Fullstack Developer",
        company: "Quedy Media | Apr 2021 - Present",
    },
    {
        description: ["Developed a Web Virtual Research Exhibit", "Worked on the backend development using Java", "Assisted other team members in frontend development"], image: "",
        position: "Freelance Software Developer",
        company: "Nov 2020 - Dec 2020",
    },
    {
        description: ["Developed a web application using Agile-Scrum Methodologies", "Built APIs using NodeJS and web pages using ReactJS", "Participated in database normalization, usability testing, and sprint planning and review with the team"], image: "",
        position: "Software Developer Intern",
        company: "Twist Resources Inc. | Apr 2019 - Jun 2019",
    },
];

export default function Features() {
    return (
        <section id="experiences" class="bg-white pt-12 sm:pt-16 lg:pt-24 pb-24 sm:pb-32 lg:pb-48">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                {/* <!-- text - start --> */}
                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Work Experiences</h2>

                    {/* <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra turpis nunc justo, amet, dolor ut fermentum. Ac augue bibendum orci pulvinar cras consequat nulla.
                    </p> */}
                </div>
                {/* <!-- text - end --> */}

                <div class="grid lg:grid-cols-3 gap-8 md:gap-10 xl:gap-14">
                    {/* <!-- feature - start --> */}
                    {experiences.map((exp) => (
                        <div class="bg-gray-200 p-8 rounded">
                            <div class="flex gap-4 md:gap-6 mb-6">
                                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-green-500 text-white rounded-lg md:rounded-xl shadow-lg">
                                    <BriefcaseIcon class="w-5 h-5" />
                                </div>

                                <div>
                                    <h3 class="text-lg md:text-xl lg:text-lg xl:text-xl font-semibold">{exp.position}</h3>
                                    <h4 class="text-sm md:text-base lg:text-sm xl:text-base">{exp.company}</h4>
                                    {/* <a href="#" class="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100">More</a> */}
                                </div>
                            </div>
                            <p class="text-sm md:text-base lg:text-sm xl:text-base text-gray-500">
                                {exp.description.map((desc) => (
                                    <li>{desc}</li>
                                ))}
                            </p>
                        </div>
                    ))}
                    {/* <!-- feature - end --> */}
                </div>
            </div>
        </section>
    );
}