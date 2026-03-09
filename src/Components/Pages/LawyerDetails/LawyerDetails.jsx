import React from 'react';
import { PiTrademarkRegisteredBold, PiWarningDiamond } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router';
import { isAvailable } from '../../../util/availability';
import { makeBooking } from '../../../util/makeBooking';
import { ToastContainer } from 'react-toastify';

const LawyerDetails = () => {
    const { paraId } = useParams();
    const lawyerData = useLoaderData();
    const lawyerId = parseInt(paraId);
    const targetedLawyerDataArr = lawyerData.filter((data) => data.id === lawyerId);
    const [targetedLawyerData] = targetedLawyerDataArr;

    const { lawyerDetail, image, experience, name, speciality, license_number, availability, fee } = targetedLawyerData;

    const checkAvailability = isAvailable(availability);

    return (
        <div className='mt-10 max-w-[90vw] mx-auto'>
            <div className="card bg-base-200 shadow-sm w-full rounded-3xl">

                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-xl md:text-3xl">Lawyer’s Profile Details</h2>
                    <p className='lg:w-225'>{lawyerDetail}</p>
                </div>
            </div>

            <div className="card md:card-side bg-base-100 shadow-sm border border-base-300 rounded-3xl mt-6">
                <figure className='md:max-w-50 m-3 rounded-2xl'>
                    <img
                        src={image}
                        alt="profile-photo"
                        className='md:max-h-50 rounded-2xl' />
                </figure>

                <div className="card-body md:ml-5 mx-auto">
                    <div className='flex items-center space-x-2'>
                        <div className="badge badge-soft badge-info text-xs md:text-md">{parseInt(experience)}+ Years Experience</div>
                    </div>

                    <h2 className="card-title font-extrabold md:text-3xl">{name}</h2>

                    <p className='flex items-center'>{speciality}<PiTrademarkRegisteredBold className='ml-6 mr-2' /> License No: {license_number}</p>

                    <div className='md:flex gap-4'>
                        <div className='font-bold'>Availability</div>
                        {
                            availability.map((day) => <div key={day} className="badge badge-soft badge-warning mr-2 mb-2 md:mr-0">{day}</div>)
                        }
                    </div>

                    <div className='flex gap-4 font-bold'>
                        Consultation Fee:
                        <p className='text-green-500 font-extrabold'>AUD: {fee}</p>
                    </div>
                </div>
            </div>


            <div className="card md:card-side bg-base-100 shadow-sm border border-base-300 rounded-3xl mt-6">

                <div className="card-body md:ml-5 mx-auto">


                    <h2 className="font-bold text-2xl text-center">Book an Appointment</h2>

                    <div className='border border-dashed border-base-300'></div>
                    <div className='flex justify-between'>
                        <div className='font-bold'>Availability</div>


                        {
                            checkAvailability === "Available" ? <div className="badge badge-soft badge-success">Lawyer Available Today</div>
                                : <div className="badge badge-soft badge-error">Lawyer Not Available Today</div>
                        }
                    </div>
                    <div className="divider -mt-1"></div>
                    <div className="badge badge-soft badge-warning py-12 md:py-6 lg:py-4"> <PiWarningDiamond />Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</div>
                    <button onClick={()=>makeBooking(targetedLawyerData)} className="btn btn-success rounded-3xl text-base-100">Book Appointment Now</button>
                    <ToastContainer />
                    
                </div>
            </div>

        </div>
    );
};

export default LawyerDetails;