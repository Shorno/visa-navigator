import {Link} from 'react-router-dom';
import visaLogo from '../assets/visaLogo.png';

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white dark:bg-blue-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-4 xl:col-span-1">
                        <div className={"flex -ml-8"}>
                            <img
                                className="h-40"
                                src={visaLogo}
                                alt="Visa Navigator Logo"
                            />
                        </div>
                        <p className="text-sm">
                            Simplifying your visa application process, one step at a time.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white hover:text-blue-200">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-200">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-200">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase">
                                    Services
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link to="/all-visas" className="text-base text-white hover:text-blue-200">
                                            All Visas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/visa-checker" className="text-base text-white hover:text-blue-200">
                                            Visa Checker
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/application-tracking"
                                              className="text-base text-white hover:text-blue-200">
                                            Application Tracking
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/support" className="text-base text-white hover:text-blue-200">
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase">
                                    Company
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link to="/about" className="text-base text-white hover:text-blue-200">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className="text-base text-white hover:text-blue-200">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/careers" className="text-base text-white hover:text-blue-200">
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="text-base text-white hover:text-blue-200">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-blue-200 tracking-wider uppercase">
                                    Subscribe to our newsletter
                                </h3>
                                <p className="mt-4 text-base text-white">
                                    Get the latest news and updates on visa regulations.
                                </p>
                                <form className="mt-4 sm:flex sm:max-w-md lg:max-w-lg xl:max-w-xl">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        required
                                        className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs lg:max-w-md xl:max-w-lg"
                                        placeholder="Enter your email"
                                    />
                                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0 lg:flex-shrink">
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-blue-500 pt-8">
                    <p className="text-base text-white xl:text-center">
                        &copy; 2024 Visa Navigator, Inc. All rights reserved @Shorno
                    </p>
                </div>
            </div>
        </footer>
    );
};


