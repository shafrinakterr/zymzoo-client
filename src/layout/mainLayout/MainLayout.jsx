import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../page/home/home/home/Home';
import Navbar from '../../page/shared/navbar/Navbar';
import Footer from '../../page/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div className='text-gray-300'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;