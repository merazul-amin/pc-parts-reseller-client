import React from 'react';

const BottomBanner = () => {
    return (
        <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <h1 className='text-6xl text-center my-8 text-purple-600 font-bold'>We Have: </h1>
                <div className="grid row-gap-8 sm:grid-cols-3">
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400">3k</h6>
                        <p className="font-bold">Products</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400">1.2k </h6>
                        <p className="font-bold">Customers</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-5xl font-bold text-deep-purple-accent-400">40</h6>
                        <p className="font-bold">Service Center</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;