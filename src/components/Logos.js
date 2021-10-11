import React from "react";
import { ReactComponent as Gmail } from "../svg/gmail.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Behance } from "../svg/behance.svg";

export default function Logos() {
    return (
        <div class="flex gap-4">
            <a href="mailto:fisaquino@gmail.com" target="_blank" rel="noreferrer" class="text-current hover:text-green-500 active:text-green-600 transition duration-100">
                <Gmail class="w-5 h-5" />
            </a>

            <a href="https://linkedin.com/in/francisianaquino" target="_blank" rel="noreferrer" class="text-current hover:text-green-500 active:text-green-600 transition duration-100">
                <Linkedin class="w-5 h-5" />
            </a>

            <a href="https://github.com/francisianaquino" target="_blank" rel="noreferrer" class="text-current hover:text-green-500 active:text-green-600 transition duration-100">
                <Github class="w-5 h-5" />
            </a>

            <a href="https://behance.net/francisianaquino" target="_blank" rel="noreferrer" class="text-current hover:text-green-500 active:text-green-600 transition duration-100">
                <Behance class="w-5 h-5" />
            </a>
        </div>
    );
}