import React from 'react';
import { removeBooking } from '../../util/removeBooking';
import { ToastContainer } from 'react-toastify';

const BookedLawyerCard = ({bookedLawyerData}) => {
    const {name, speciality, fee} = bookedLawyerData;
    return (

        <div className="card md:card-side bg-base-100 shadow-sm border border-base-300 rounded-3xl mt-6">
            <div className="card-body md:ml-5 mx-auto">
                <div className='font-bold text-xl'>{name}</div>
                <div className='md:flex justify-between'>
                    <div className='text-lg text-gray-500'>{speciality}</div>
                    <div className='text-lg text-gray-500'>Appointment Fee :  {fee} AUD</div>
                </div>
                <div className='border border-dashed border-base-300 my-2'></div>
                <button onClick={() => removeBooking(bookedLawyerData)} className="btn btn-error btn-outline rounded-3xl">Cancel Appointment</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>

    );
};

export default BookedLawyerCard;