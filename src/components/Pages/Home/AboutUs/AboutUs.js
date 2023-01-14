import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                The Things
                                <br className="hidden md:block" />
                                we have:-{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    vision and mission
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                At Pc Parts Reseller Zone we aim to provide the best buying and selling experience to our customers. Our policies are extremely customer-centric, meaning that everything that we do is to ensure that our customers always become satisfied and return again.

                                In addition to that, we encourage our customers to provide their feedback and equally participate in making it the best online shop in BD.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;