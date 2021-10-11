import React from "react";
import Logos from "./Logos";

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <div class="bg-gray-900">
            <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex flex-col items-center border-t pt-6 text-gray-400">
                    {/* <!-- nav - start --> */}
                    <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="hover:text-green-500 active:text-green-600 transition duration-100">
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    {/* <!-- nav - end --> */}

                    {/* <!-- social - start --> */}
                    <Logos />
                    {/* <!-- social - end --> */}
                </div>

                <div class="text-gray-400 text-sm text-center py-8">
                    © 2021 All rights reserved.
                </div>
            </footer>
        </div>
    );
}