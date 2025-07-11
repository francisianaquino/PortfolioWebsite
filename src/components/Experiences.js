import React from "react";
import { BriefcaseIcon, UsersIcon } from "@heroicons/react/solid";

export const experiences = [
    {
        description: ["Developed GraphQL APIs using Apollo GraphQL and NodeJS", "Built web pages and integrated APIs using React JS", "Collaborated with product manager and other team members for feature requirements"], image: "",
        position: "Full Stack Developer",
        company: "CL | Mar 2024 - Apr 2025",
    },
    {
        description: ["Worked on an ERP project and a PWA project", "Developed REST APIs using Java SpringBoot, gRPC APIs using GoLang, and web pages using ReactJS", "Managed MySQL and PostgreSQL databases", "Helped in application deployment", "Collaborated with the team and clients for project updates", "Mentored other software engineers and interns", "Became a Technical/Team Lead after a year of employment"], image: "",
        position: "Software Engineer",
        company: "Hooli Software | Dec 2021 - Mar 2024",
    },
    {
        description: ["Works in the development of an E-Commerce SaaS project using PHP Laravel", "Integrates e-commerce APIs like WooCommerce API, Lazada Open Platform, and Shopee Open Platform"], image: "",
        position: "Full Stack Developer",
        company: "Quedy Media | Apr 2021 - Dec 2021",
    },
    {
        description: ["Developed a Web Virtual Research Exhibit", "Worked on the backend development using Java SpringBoot", "Assisted other team members in frontend development"], image: "",
        position: "Freelance Software Developer",
        company: "Nov 2020 - Dec 2020",
    },
    {
        description: ["Developed a web application using Agile-Scrum Methodologies", "Built APIs using NodeJS and web pages using ReactJS", "Participated in database normalization, usability testing, and sprint planning and review with the team"], image: "",
        position: "Software Developer Intern",
        company: "Twist Resources Inc. | Apr 2019 - Jun 2019",
    },
];

export default function Experiences() {
    return (
        <section id="experiences" className="bg-white pt-12 sm:pt-16 lg:pt-24 pb-24 sm:pb-32 lg:pb-48">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                {/* <!-- text - start --> */}
                <div className="mb-10 md:mb-16">
                    <BriefcaseIcon className="mx-auto w-10 mb-4 text-green-500" />
                    <h2 className="text-gray-900 text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">Work Experiences</h2>

                    {/* <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra turpis nunc justo, amet, dolor ut fermentum. Ac augue bibendum orci pulvinar cras consequat nulla.
                    </p> */}
                </div>
                {/* <!-- text - end --> */}

                <div className="grid lg:grid-cols-3 gap-8 md:gap-10 xl:gap-14">
                    {/* <!-- experiences - start --> */}
                    {experiences.map((exp) => (
                        <div className="bg-gray-100 shadow-lg p-8 rounded">
                            <div className="flex gap-4 md:gap-6 mb-6">
                                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center flex-shrink-0 bg-green-500 text-white rounded-lg md:rounded-xl shadow-lg">
                                    <UsersIcon className="w-5 h-5" />
                                </div>

                                <div>
                                    <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl font-semibold">{exp.position}</h3>
                                    <h4 className="text-sm md:text-base lg:text-sm xl:text-base">{exp.company}</h4>
                                </div>
                            </div>
                            <p className="text-sm md:text-base lg:text-sm xl:text-base text-gray-700">
                                {exp.description.map((desc) => (
                                    <li>{desc}</li>
                                ))}
                            </p>
                        </div>
                    ))}
                    {/* <!-- experiences - end --> */}
                </div>
            </div>
        </section>
    );
}