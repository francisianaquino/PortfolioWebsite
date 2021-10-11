import React from "react";
import {ReactComponent as Spring} from "../svg/spring.svg";
import {ReactComponent as Reactjs} from "../svg/reactjs.svg";
import {ReactComponent as Nodejs} from "../svg/nodejs.svg";
import {ReactComponent as Laravel} from "../svg/laravel.svg";
import {ReactComponent as Mysql} from "../svg/mysql.svg";
import {ReactComponent as Java} from "../svg/java.svg";
import {ReactComponent as Javascript} from "../svg/javascript.svg";
import {ReactComponent as Php} from "../svg/php.svg";
import { CodeIcon } from "@heroicons/react/solid";

const skills = [
    <Reactjs />, <Nodejs />, <Java  />, <Spring />,  <Php />, <Laravel />, <Mysql />, <Javascript />,
];

export default function Skills() {
    return (
        <section id="skills" class="bg-custom-white py-12 sm:py-16 lg:py-24">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <CodeIcon className="mx-auto w-10 mb-4 text-green-400" />
                <h2 class="text-gray-900 text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-8">Skills &amp; Technologies</h2>

                <div class="grid grid-cols-2 md:grid-cols-4 shadow-lg bg-green-100 rounded-lg p-3">
                    {/* <!-- logo - start --> */}
                    {skills.map((item) => (
                    <div class="flex justify-center p-3">
                        <i class="w-auto h-12 sm:h-14 lg:h-16">{item}</i>
                    </div>
                    ))}
                    {/* <!-- logo - end --> */}
                </div>
            </div>
        </section>
    );
}