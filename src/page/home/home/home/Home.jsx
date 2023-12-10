import React from 'react';
import Banner from '../banner/Banner';
import About from '../about/About';
import Testimonials from '../../testimonials/Testimonials';
import Blog from '../blog/Blog';
import NewsLetter from '../newsletter/NewsLetter';
import Trainer from '../teamTrainer/Trainer';
import Featured from '../featured/Featured';
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <div className='space-y-10'>
           <Helmet>
                <title>ZYMZOO | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-6xl mx-auto'>
                <Featured></Featured>
                <About></About>
                <Testimonials></Testimonials>
                <Blog></Blog>

            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
            <div className='max-w-6xl mx-auto'>
                <Trainer></Trainer>

            </div>
        </div>
    );
};

export default Home;