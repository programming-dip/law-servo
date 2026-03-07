import React, { useMemo, useState } from 'react';
import SuccessCard from './SuccessCard';
const Success = () => {
    const [successData, setSuccessData] = useState([]);
    useMemo(() => {
        fetch("/successData.json")
            .then(res => res.json())
            .then(data => setSuccessData(data));
    }, []);

    return (
        <div>
            <div className='mb-10'>
                <h2 className='font-bold text-center text-4xl'>We Provide Best Law Services</h2>
                <p className='font-extralight text-center text-sm'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>

            <div className='flex flex-col md:flex-row gap-12 items-center justify-center'>
                {
                    successData.map((data) => <SuccessCard data={data} key={data.label}></SuccessCard>)
                }
            </div>




        </div>
    );
};

export default Success;