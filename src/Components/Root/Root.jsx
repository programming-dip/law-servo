import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import { useDynamicTitle } from '../../util/useDynamicTitle';
import Loading from '../Loading/Loading';

const Root = () => {
    useDynamicTitle();

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    
    return (
      
         <div>
            <Navbar></Navbar>
            {
                isLoading? <Loading></Loading> :
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>


        
       

    );
};

export default Root;