import React from 'react';
import { Wave } from 'react-animated-text';
import { Wave1 } from '../../SharedPages/AnimationText/AnimationText';

const HomeTopBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-6xl font-bold"> <Wave text="Welcome" effect="stretch" effectChange={2.0} /></h1>
                        <p className="mb-5">

                            Welcome you in this pc reselling world. You are very very welcome here. From here you can purchase second hand pc and pc parts in good price.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTopBanner;