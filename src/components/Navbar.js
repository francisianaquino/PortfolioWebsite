import React, { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';

const navigation = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experiences', href: 'experiences' },
    { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
    const [navbar, setNavbar] = React.useState(false);

    function changeBackground() {
        window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={(navbar ? 'bg-gray-900 border-b border-green-500 shadow-xl' : 'bg-transparent') + ' fixed w-full z-20'}>
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <Popover>
                    <header className="flex justify-between items-center py-2 md:py-4">
                        {/* <!-- logo - start --> */}
                        <Link to={navigation[0].href} spy={true} smooth={true} className="inline-flex items-center text-green-500 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                            <img className={'h-8 rounded-md md:h-9 md:rounded-lg ' + (navbar ? 'border border-green-500' : '')} src="/android-chrome-192x192.png" alt="logo" /> Francis Ian Aquino
                        </Link>
                        {/* <!-- logo - end --> */}

                        {/* <!-- nav - start --> */}
                        <nav className="hidden lg:flex gap-12">
                            {navigation.map((item) => (
                                <Link activeClass="text-green-500" to={item.href} spy={true} smooth={true} className="text-gray-500 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100">
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* <!-- nav - end --> */}

                        {/* <!-- buttons - start --> */}
                        <div className="-mr-2 flex items-center lg:hidden">
                            <Popover.Button className={(navbar ? 'bg-gray-900' : 'bg-transparent') + " rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"}>
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        {/* <!-- buttons - end --> */}
                    </header>
                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <Link to={navigation[0].href} spy={true} smooth={true} className="inline-flex items-center text-green-500 text-base font-bold gap-2.5" aria-label="logo">
                                        <img className="h-7 border border-green-500 rounded-md" src="/android-chrome-192x192.png" alt="logo" /> Francis Ian Aquino
                                    </Link>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <Link
                                            activeClass="text-green-500"
                                            to={item.href}
                                            spy={true}
                                            smooth={true}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 active:text-green-700 hover:text-gray-900 hover:bg-gray-400"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </nav>
    );
}