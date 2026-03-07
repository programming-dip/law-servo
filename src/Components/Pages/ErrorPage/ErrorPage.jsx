import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../Navbar/Navbar';

const ErrorPage = () => {
    return (
        
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-100">
            
            <div className="hero-content text-center">
                <div className="max-w-md">
                    
                    <h1 className="text-9xl font-black text-primary opacity-20">404</h1>

                    <div className="relative -mt-16">
                        <h2 className="text-4xl font-bold">Lost in Space?</h2>
                        <p className="py-6 text-lg">
                            The page you’re looking for has drifted out of orbit.
                            Don't worry, we can get you back to mission control.
                        </p>

                       
                        <div className="flex justify-center gap-4">
                            <Link to="/" className="btn btn-primary shadow-lg">
                                Back to Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="btn btn-outline btn-secondary"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>

                  
                    <div className="stats shadow mt-12 bg-base-100 hidden md:inline-flex">
                        <div className="stat">
                            <div className="stat-title">Status</div>
                            <div className="stat-value text-error">Missing</div>
                            <div className="stat-desc">Error Code: NULL_POINTER</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;