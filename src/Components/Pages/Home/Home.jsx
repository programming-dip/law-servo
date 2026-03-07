import React, { createContext, useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Lawyers from '../../Lawyers/Lawyers';
import Success from '../../Success/Success';
import LawyerDetails from '../LawyerDetails/LawyerDetails';

export const dataContext = createContext('');




const Home = () => {
    const [lawyersData, setLawyersData] = useState([]);

    
    useEffect(() => {
        fetch('/lawyerData.json')
            .then(res => res.json())
            .then(data => setLawyersData(data));
    }, [])

    return (
        <div className='px-5 md:px-12 max-w-[90vw] mx-auto'>
            <Banner></Banner>
            <dataContext.Provider value={lawyersData}>
                <Lawyers></Lawyers>
            </dataContext.Provider>
            <Success></Success>
        </div>
    );
};

export default Home;