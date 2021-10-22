import React from "react";
import Logos from "./Logos";
import { Link } from 'react-scroll';

const navigation = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experiences', href: 'experiences' },
    { name: 'Contact', href: 'contact' },
];

export default function Footer() {
    return (
        <div className="bg-gray-900">
            <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex flex-col items-center border-t border-gray-400 pt-6 text-gray-400">
                    {/* <!-- nav - start --> */}
                    <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
                        {navigation.map((item) => (
                            <Link to={item.href} spy={true} smooth={true} className="hover:text-green-500 active:text-green-700 transition duration-100">
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    {/* <!-- nav - end --> */}

                    {/* <!-- social - start --> */}
                    <Logos />
                    {/* <!-- social - end --> */}
                </div>

                <div className="text-gray-400 text-sm text-center py-8">
                    © 2021 All rights reserved.
                </div>
            </footer>
        </div>
    );
}