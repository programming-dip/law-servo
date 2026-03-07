import React from 'react';
import { PiTrademarkRegistered } from 'react-icons/pi';
import { isAvailable } from '../../util/availability';
import { Link } from 'react-router';

const Lawyer = ({ lawyerData }) => {
    const {id, name, speciality, license_number, experience, availability, image } = lawyerData;

    const checkAvailability = isAvailable(availability);
    
    return (
        <div className="card card-side bg-base-100 shadow-sm border border-base-300 rounded-3xl">
            <figure className='max-w-23 m-3 rounded-2xl'>
                <img
                    src={image}
                    alt="profile-photo"
                    className='max-h-35 rounded-2xl' />
            </figure>
            
            <div className="card-body md:ml-5 mx-auto">
                <div className='flex items-center space-x-2'>
                    {checkAvailability === "Available"? <div className="badge badge-soft badge-success text-xs md:text-base">{checkAvailability}</div>
                :    <div className="badge badge-soft badge-error text-[10px] md:text-base">{checkAvailability}</div>
                }
                    
                    <div className="badge badge-soft badge-info text-[8px] md:text-base">{parseInt(experience)}+ Years Experience</div>
                </div>

                <h2 className="card-title">{name}</h2>
                <p>{speciality}</p>
                <p className='flex items-center'><PiTrademarkRegistered className='mr-2' /> License No: {license_number}</p>
                <div className="card-actions">
                    <Link to={`/lawyerDetails/${id}`} className="btn btn-outline rounded-3xl px-14 md:px-20">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;