import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { useDynamicTitle } from '../../util/useDynamicTitle';

const Root = () => {
    useDynamicTitle();
    return (

        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Root;