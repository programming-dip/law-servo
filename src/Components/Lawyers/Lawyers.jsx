import React, { useContext, useState } from 'react';
import { dataContext } from '../Pages/Home/Home';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = () => {
    const lawyersData = useContext(dataContext);
    console.log(lawyersData);

    const [showAllLawyers, setShowAllLawyers] = useState(false);

    return (
        <div className='my-20'>
            <div className='text-center max-w-3xl mx-auto'>
                <h2 className='text-3xl font-bold'>Our Best Lawyers</h2>
                <small className='font-extralight'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</small>
            </div>

            <div className='flex flex-col md:grid grid-cols-2 gap-15 mt-10'>
                {
                    showAllLawyers ?
                        lawyersData.map((lawyerData) =>
                            <Lawyer key={lawyerData.id} lawyerData={lawyerData}></Lawyer>
                        )
                        :
                        lawyersData.slice(0, 6).map((lawyerData) =>
                            <Lawyer key={lawyerData.id} lawyerData={lawyerData}></Lawyer>
                        )


                }
            </div>

            <div className='flex justify-center mt-10'>
                <button onClick={() => setShowAllLawyers(!showAllLawyers)} className="btn btn-active btn-success rounded-4xl px-5">
                    {showAllLawyers? "Show Less" : "Show All Lawyer"}
                </button>
            </div>
        </div>

    );
};

export default Lawyers;