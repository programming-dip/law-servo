import React, { createContext, useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Lawyers from '../../Lawyers/Lawyers';
import Success from '../../Success/Success';
import LawyerDetails from '../LawyerDetails/LawyerDetails';
import Loading from '../../Loading/Loading';

export const dataContext = createContext('');




const Home = () => {
    const [lawyersData, setLawyersData] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(true);

    
    useEffect(() => {
        fetch('/lawyerData.json')
            .then(res => res.json())
            .then(data => {
                setLawyersData(data);
                setIsDataLoading(false);
            });

    }, [])

    return (

        <div className='px-5 md:px-12 max-w-[90vw] mx-auto'>
            <Banner></Banner>
            <dataContext.Provider value={lawyersData}>
                {
                    isDataLoading? <Loading></Loading> :
                    <Lawyers></Lawyers>
                }
            </dataContext.Provider>
            <Success></Success>
        </div>
    );
};

export default Home;