import React from 'react';
import CountUp from 'react-countup';

const SuccessCard = ({data}) => {
    const {count, label, image} = data;

    return (
        
        
            <div className="card bg-base-200 w-80 shadow-sm rounded-2xl border border-base-300">
                    <figure className="px-5 pt-10 flex items-start justify-start">
                        <img
                            src={image}
                            alt="totalLawyer"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-start font-bold text-4xl"><CountUp start={0} end={count} duration={2.75} enableScrollSpy={true} scrollSpyOnce={true} />+</h2>
                        <p className='font-extralight text-lg'>{label}</p>
                    </div>
                </div>
        
    );
};

export default SuccessCard;