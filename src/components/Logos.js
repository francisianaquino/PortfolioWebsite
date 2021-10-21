import React from "react";
import { ReactComponent as Gmail } from "../svg/gmail.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Behance } from "../svg/behance.svg";

export default function Logos() {
    return (
        <div className="flex gap-4">
            <a href="mailto:fisaquino@gmail.com" target="_blank" rel="noreferrer" className="text-current hover:text-green-500 active:text-green-700 transition duration-100">
                <Gmail className="w-5 h-5" />
            </a>

            <a href="https://linkedin.com/in/francisianaquino" target="_blank" rel="noreferrer" className="text-current hover:text-green-500 active:text-green-700 transition duration-100">
                <Linkedin className="w-5 h-5" />
            </a>

            <a href="https://github.com/francisianaquino" target="_blank" rel="noreferrer" className="text-current hover:text-green-500 active:text-green-700 transition duration-100">
                <Github className="w-5 h-5" />
            </a>

            <a href="https://behance.net/francisianaquino" target="_blank" rel="noreferrer" className="text-current hover:text-green-500 active:text-green-700 transition duration-100">
                <Behance className="w-5 h-5" />
            </a>
        </div>
    );
}