import React from "react";

const projects = [
    {
        title: "QCommerce",
        subtitle: "PHP Laravel | MySQL",
        description:
            "An E-Commerce Software as a Service (Saas) project that integrates Lazada Open Platform, Shopee Open Platform, Shopify API, and WooCommerce API to connect e-commerce shops across different e-commerce platforms for unified inventory tracking and order management",
        image: "/images/qcommerce.gif",
    },
    {
        title: "DOST R3 NSTW 2020: Virtual Exhibit",
        subtitle: "HTML | Javascript | Java | MySQL",
        description:
            "An Online Web Exhibit for the National Science and Technology Week 2020 featuring Region III projects and researches for Kalusugan, Kaayusan, Kabuhayan, and Kinabukasan",
        image: "/images/virtual-exhibit.gif",
    },
    {
        title: "Biahe TARA (Travel Augmented Reality App)",
        subtitle: "Java Android | Google Cloud Platform | Firebase",
        description:
            "An Android App for my undergrad thesis that has the following features: show descriptions about a particular food establishment, translate signages with foreign characters into characters readable for the tourist, and provide a list of available local activities for tourists' experiential learning",
        image: "/images/biahe-tara.gif",
    },
    {
        title: "TwistHRM",
        subtitle: "ReactJS | NodeJS | MySQL",
        description:
            "A Human Resource Management project that I worked on with a team, during my internship. The Web App includes a list of employees' information and background, and a list of machines allocated to each employee for inventory management",
        image: "/images/twisthrm.gif",
    },
];

export default function Blog() {
    return (
        <section id="projects" class="bg-white py-12 sm:py-16 lg:py-24">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                {/* <!-- text - start --> */}
                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">Projects</h2>

                    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                        Projects and Apps that I worked on from my internship and thesis, up to my current job.
                    </p>
                </div>
                {/* <!-- text - end --> */}

                <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
                    {/* <!-- card - start --> */}
                    {projects.map((project) => (
                        <div class="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" class="block group h-48 md:h-64 bg-gray-100 overflow-hidden relative">
                                <img src={project.image} loading="lazy" alt="by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />
                            </a>

                            <div class="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 class="text-gray-800 text-lg font-semibold text-center mb-2">
                                    <a href="#" class="hover:text-green-500 active:text-green-600 transition duration-100">{project.title}</a>
                                </h2>
                                <h3 className="text-green-400 text-md font-semibold text-center mb-2">
                                    {project.subtitle}
                                </h3>

                                <p class="text-gray-500 mb-8">{project.description}</p>

                                {/* <div class="flex justify-between items-end mt-auto">
                                <div class="flex items-center gap-2">
                                    <div class="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="by Brock Wegner" class="w-full h-full object-cover object-center" />
                                    </div>

                                    <div>
                                        <span class="block text-green-500">Mike Lane</span>
                                        <span class="block text-gray-400 text-sm">July 19, 2021</span>
                                    </div>
                                </div>

                                <span class="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
                            </div> */}
                            </div>
                        </div>
                    ))}
                    {/* <!-- card - end --> */}
                </div>
            </div>
        </section>
    );
}