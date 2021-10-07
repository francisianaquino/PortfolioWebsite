import { React, Fragment } from "react";
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
];

export default function Hero() {
    return (
        <div class="bg-white sticky top-0 z-20">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <Popover>
                <header class="flex justify-between items-center border-b py-2 md:py-4">
                    {/* <!-- logo - start --> */}
                    <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                        <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>

                        Francis Ian Aquino
                    </a>
                    {/* <!-- logo - end --> */}

                    {/* <!-- nav - start --> */}
                    <nav class="hidden lg:flex gap-12">
                        <a href="#about" class="text-green-500 text-lg font-semibold">Home</a>
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-600 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100">
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    {/* <!-- nav - end --> */}

                    {/* <!-- buttons - start --> */}<div className="-mr-2 flex items-center lg:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
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
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-green-600.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span className="sr-only">Close main menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            </div>
        </div>
    );
}