import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

const NoLawyerFound = () => {
    const location = useLocation();
    const path = location.pathname;
    const pathSegments = path.split("/");
    const id = pathSegments[2];

    const [showSearching, setShowSearching] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [showGoHome, setShowGoHome] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{setShowSearching(true)},1000);
    },[]);

    useEffect(()=>{
        setTimeout(()=>{
            setShowFailed(true);
        },2000)
    },[]);

    useEffect(()=>{
        setTimeout(()=>{
            setShowGoHome(true);
        },3000)
    },[])

    return (
        <div>
            <div className="mockup-code max-w-[90vw] mx-auto mt-40 mb-[30vh]  md:text-2xl">

                <pre data-prefix="$" className='text-white'><code>searching for lawyer with id: #{id}</code></pre>
                {
                    showSearching && <pre data-prefix=">" className="text-warning"><code>Left no page unturned...</code></pre>
                }
                
                {
                    showFailed && <pre data-prefix=">" className="text-error"><code>Failed to find Mr {id}!</code></pre>
                }
            </div>

            <div className='flex justify-center -mt-30'>
                {
                    showGoHome && <Link to="/" className='btn btn-soft btn-primary rounded-xl'>Go Home</Link>
                }
            </div>
        </div>
    );
};

export default NoLawyerFound;