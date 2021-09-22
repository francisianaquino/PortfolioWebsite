import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experiences
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((exp) => (
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {exp.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {exp.company}
                    </span>
                    <ul class="list-disc">
                      {exp.quote.map((quote) => (
                        <li class="text-sm">{quote}</li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}