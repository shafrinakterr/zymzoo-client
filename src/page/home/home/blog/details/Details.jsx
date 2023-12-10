import { useState } from "react";


import { Typewriter } from 'react-simple-typewriter'
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({})
    const axiosPublic = useAxiosPublic();
    axiosPublic.get(`/blogs/${id}`)
        .then(res => {
            setDetails(res.data);
        })
    console.log();
    return (
        <div>
            <div>
                <div className="hero bg-fixed mb-16 h-[600px]" style={{ backgroundImage: `url(${details.image})`, width: '100%', backgroundPosition: 'center' }}>
                    <div className="bg-gradient-to-r from-[#010523] opacity-70 to-[#010418] hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className='text-primary-color mb-3' id="text" >

                                <span className="text-xl  lg:text-5xl" style={{ color: '#C7EB0B', fontWeight: 'bold', }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Welcome to zymzoo']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={90}
                                        deleteSpeed={50}
                                        delaySpeed={900}

                                    />
                                </span>
                            </h1>
                            <h1 className="mb-5 text-white lg:text-5xl font-bold">{details?.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div class="relative lg:flex w-full text-white  flex-row rounded-xl  bg-clip-border  shadow-md">
                        <div class="relative w-2/5 m-0 overflow-hidden    shrink-0 rounded-xl bg-clip-border">
                            <img
                                src={details.image}
                                class="object-cover hidden lg:block w-full h-full"
                            />
                        </div>
                        <div class="p-6">
                            <h4 class="block  font-sans  antialiased font-semibold leading-snug tracking-normal text-primaryColor-0 md:text-5xl mb-5 text-3xl">
                                {details.title}
                            </h4>
                            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed ">
                                {details.description}
                            </p>
                            <Link to='/' class="inline-block" href="#">
                                <button
                                    className="btn bg-primaryColor-0 flex items-center"
                                >
                                    Go to home
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="w-4 h-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Details;