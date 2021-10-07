import React from "react";
import { LocationMarkerIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="bg-gray-900 pt-6 sm:pt-8 lg:pt-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center justify-center pt-10 md:pt-0">
                <div class="md:w-1/2 relative w-full bg-green-800 rounded-md pt-24 pb-8 px-8 shadow-md hover:shadow-lg transition flex flex-col items-center">
                    <div class="absolute rounded-full bg-gray-100 w-28 h-28 lg:w-32 lg:h-32 p-2 z-10 -top-8 lg:-top-12 shadow-lg hover:shadow-xl transition">
                        <div class="rounded-full bg-black w-full h-full overflow-auto">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <h3 class="font-bold text-2xl sm:text-3xl md:text-2xl lg:text-3xl text-white">
                        Francis Ian Aquino
                    </h3>
                    <h4 class="font-semibold text-base sm:text-xl md:text-base lg:text-xl text-white">Software Developer</h4>
                    <p class="text-sm sm:text-base md:text-sm lg:text-base text-center my-1 mt-6 text-white">
                        <LocationMarkerIcon class="w-6 h-6 mr-2 inline-block" /> La Poblacion Villas, Concepcion, Lubao, Pampanga
                    </p>
                    <p class="text-sm sm:text-base md:text-sm lg:text-base text-center my-1 text-white">
                        <MailIcon class="w-6 h-6 mr-2 inline-block" /> fisaquino@gmail.com
                    </p>
                    <p class="text-sm sm:text-base md:text-sm lg:text-base text-center my-1 text-white">
                        <PhoneIcon class="w-6 h-6 mr-2 inline-block" /> 0927-488-9084
                    </p>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="md:w-1/2 flex flex-col pb-8 px-8 md:px-0 md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-6 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-6 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-6 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-5 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

<section id="contact" className="relative">
    <div className="container px-5 py-10 mx-auto mt-10 rounded-lg bg-dark-gray2 flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            {/* <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    /> */}
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        La Poblacion Villas, Concepcion. <br />
                        Lubao, Pampanga
                    </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <button className="text-green-400 leading-relaxed">
                        fisaquino@gmail.com
                    </button>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">123-456-7890</p>
                </div>
            </div>
        </div>
        {/* <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Submit
                    </button>
                </form> */}
    </div>
</section>