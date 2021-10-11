import React from "react";
import { LocationMarkerIcon, PhoneIcon, MailIcon, ChatAlt2Icon } from "@heroicons/react/solid";

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
                    <div class="absolute rounded-full bg-gray-300 w-28 h-28 lg:w-32 lg:h-32 p-2 z-10 -top-8 lg:-top-12 shadow-lg hover:shadow-xl transition">
                        <div class="rounded-full bg-black w-full h-full overflow-auto">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <h3 class="font-bold text-2xl sm:text-3xl md:text-2xl lg:text-3xl text-gray-300">
                        Francis Ian Aquino
                    </h3>
                    <h4 class="font-semibold text-base sm:text-xl md:text-base lg:text-xl text-gray-300">Software Developer</h4>
                    <p class="text-sm sm:text-base md:text-sm lg:text-base text-center my-1 mt-6 text-gray-300">
                        <LocationMarkerIcon class="w-6 h-6 mr-2 inline-block" /> La Poblacion Villas, Concepcion, Lubao, Pampanga
                    </p>
                    <p class="text-sm sm:text-base md:text-sm lg:text-base text-center my-1 text-gray-300">
                        <MailIcon class="w-6 h-6 mr-2 inline-block" /> fisaquino@gmail.com
                    </p>
                    <p class="text-sm sm:text-base md:text-sm lg:text-base text-center my-1 text-gray-300">
                        <PhoneIcon class="w-6 h-6 mr-2 inline-block" /> 0927-488-9084
                    </p>
                </div>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="md:w-1/2 w-full flex flex-col pb-8 px-8 md:px-0 md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-300 text-3xl lg:text-4xl mb-5 font-medium title-font">
                        Get in touch <ChatAlt2Icon class="w-8 h-8 inline-block" />
                    </h2>
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
                        className="text-gray-300 bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}