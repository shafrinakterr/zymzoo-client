import React from 'react';
import img from '../../../../assets/image/home/img_2.png'
import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/KKXnHJ5/banner.jpg)' }}
                className="hero lg:h-[750px] lg:pt-0 pt-10 h-[400px] ">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <img src={img} className="mt-5 hidden lg:block " />
                    <div className='text-white'>
                        <h1 className='mb-5 lg:text-xl uppercase font-semibold'>WELCOME TO our ZYMZOO</h1>
                        <h1 className="lg:text-8xl leading-tight text-4xl uppercase "><span className='text-primaryColor-0 font-semibold '>Time</span> to get <span className='text-primaryColor-0 font-semibold '>fit</span></h1>
                        <p className="py-6">Unleash Your Strength, Transform Your Body. Elevate Your Fitness at <span className='text-primaryColor-0 font-semibold text-xl'>zymzoo</span> Join Today for a Healthier, Happier You!"</p>
                        <NavLink to='/class'>
                            <button className="btn border-2 btn-outline border-primaryColor-0 hover:bg-black rounded-full shadow-inner  text-white"> Classes</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;