import React, { useMemo, useState } from 'react';
import { date, getFromDB } from '../../../util/makeBooking';
import { Link, useLoaderData } from 'react-router';
import { PiEmptyFill } from 'react-icons/pi';
import BookedLawyerCard from '../../BookedLawyerCard/BookedLawyerCard';
import FeeChart from '../../FeeChart/FeeChart';


const Bookings = () => {
    const bookingData = getFromDB();
    const lawyersData = useLoaderData();
    const currentDate = date;



    const bookedLawyersDataArr = lawyersData.filter((item) =>
        bookingData.some((item2) => item.id === item2.lawyerId && item2.date === currentDate)
    );




    return (
        (bookedLawyersDataArr.length === 0) ?

            <div className="card bg-base-100 w-150 max-w-[90vw] mx-auto mt-6">
                <figure className="px-10 pt-10">
                    <PiEmptyFill className='text-9xl' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">No booking Found</h2>
                    <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                    <div className="card-actions">
                        <Link to={'/'} className="btn btn-info btn-soft rounded-2xl">Go to Home</Link>
                    </div>
                </div>
            </div>

            :

            <div className='max-w-[90vw] mx-auto mt-6'>

                <FeeChart bookedLawyersDataArr = {bookedLawyersDataArr}></FeeChart>
                <div className='text-center'>
                    <h2 className='font-bold text-3xl'>My Today Appointments</h2>
                    <p className='text-lg mt-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                </div>

                {
                    bookedLawyersDataArr.map(bookedLawyerData => <BookedLawyerCard key={bookedLawyerData.id} bookedLawyerData={bookedLawyerData}></BookedLawyerCard>)
                }


            </div>


    );
};

export default Bookings;