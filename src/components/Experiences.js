import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experiences() {
    return (
        <section id="experiences">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center">
                    <UsersIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">Work Experiences</h1>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
                        {experiences.map((exp) => (
                            <div key={exp.name} className="relative h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <dt className="mb-4">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-gray-500">
                                        <TerminalIcon className="h-12 w-12" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">{exp.name}</p>
                                    <p className="ml-16 text-sm uppercase">{exp.company}</p>
                                </dt>
                                {exp.description.map((desc) => (
                                    <li className="text-base text-gray-500">{desc}</li>
                                ))}
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

<div className="container px-5 py-10 mx-auto text-center">
    <UsersIcon className="w-10 inline-block mb-4" />
    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Work Experiences
    </h1>
    <div className="flex flex-wrap m-4">
        {experiences.map((exp) => (
            <div className="p-4 lg:w-1/3 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <TerminalIcon className=" absolute block w-8 text-gray-500 mb-4" />
                    <div className="inline-flex items-center">
                        <span className="flex-grow flex flex-col pl-4 mt-2 ml-8">
                            <span className="title-font font-medium text-white">
                                {exp.name}
                            </span>
                            <span className="text-gray-500 text-sm uppercase">
                                {exp.company}
                            </span>
                        </span>
                    </div>
                    <ul class="list-disc">
                        {exp.description.map((desc) => (
                            <li class="text-sm">{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
</div>