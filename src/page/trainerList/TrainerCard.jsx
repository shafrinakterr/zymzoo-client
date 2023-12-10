import React from 'react';
import { Link } from 'react-router-dom';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';

const TrainerCard = ({ trainer }) => {
    return (
        <div className="max-w-sm shadow-inherit rounded overflow-hidden">
            <div class="p-4 shadow-inner  shadow-primaryColor-0  w-full">
                <div class="h-full  border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-52 md:h-36 w-full object-cover object-center" src={trainer.profileImage} alt="" />
                    <div class="p-6">
                        <div className="flex pb-3 pt-2 gap-7">
                            <FaFacebook className="text-xl font-normal leading-relaxed" />
                            <RiInstagramFill className="text-2xl font-normal leading-relaxed" />
                            <FaTwitterSquare className="text-2xl font-normal leading-relaxed" />
                        </div>
                        <h1 class="title-font text-2xl font-medium text-primaryColor-0 mb-3">{trainer.name}</h1>
                        <h1 class="title-font text-lg font-medium text-primaryColor-0 mb-3">Available time {trainer.availableHours} hours</h1>
                        <p className='text-lg text-shadow-lg'>{trainer.yearsOfExperience} <span>Years of Experience</span></p>
                        <p class="leading-relaxed h-20 mb-3">{trainer.description}</p>
                        <div class="flex items-center flex-wrap ">
                           <Link to={`/trainer/${trainer._id}`}>
                                <button className='btn btn-outline border-x-primary text-primaryColor-0 shadow-inner shadow-primaryColor-0 rounded-full border-primaryColor-0'>Know more</button>
                           </Link>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerCard;
