import Cover from "../assets/why-choose-us.webp"
import {Typewriter} from "react-simple-typewriter";
import {Fade, Slide} from "react-awesome-reveal";

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            <Typewriter
                                words={['1.2M', '1,200,000']}
                                loop={false}
                                typeSpeed={80}
                                deleteSpeed={50}
                                cursor
                            />
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            <Typewriter
                                words={['24/7']}
                                loop={false}
                                typeSpeed={80}
                                cursor
                            />
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Support</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            <Typewriter
                                words={['10']}
                                loop={false}
                                typeSpeed={80}
                                cursor
                            />
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Years of experience</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            <Typewriter
                                words={['98%']}
                                loop={false}
                                typeSpeed={80}
                                cursor
                            />
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Visa approval rate</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Slide>
                        <img
                            src={Cover}
                            alt="Travel"
                            className="rounded-lg shadow-lg"
                        />
                    </Slide>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Why choose Visa Navigator?</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-4">
                            Find out why we lead the travel document industry, enabling
                            travelers to fly with ease.
                        </p>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Slide direction={"right"} cascade>
                                <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Fast and hassle-free
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        Enjoy a far simpler process than dealing with foreign
                                        governments.
                                    </p>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Secure and Safe
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        All your information is always protected with best-in-class
                                        security.
                                    </p>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Get Approved
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        We have a 98% visa approval rate. Our team is committed to
                                        your success!
                                    </p>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        Awesome support
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        Don’t worry! Our customer support is ready to help you 24/7.
                                    </p>
                                </div>
                            </Slide>
                        </div>
                        <button
                            className="mt-8 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition duration-300">
                            Apply Now →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
