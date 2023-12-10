import React, { useEffect, useState } from 'react';
import TrainerCard from './TrainerCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Cta from './cta/Cta';
import { Helmet } from "react-helmet-async";
const TrainerList = () => {
    const axiosPublic = useAxiosPublic()
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_MONGODB_API_ENDPOINT' with your actual API endpoint
                const response = await axiosPublic.get('/trainers');
                setTrainers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='max-w-6xl mx-auto pt-36'>
             <Helmet>
                <title>ZYMZOO | Trainer</title>
            </Helmet>
            <div className="mb-10">
                <h1 className="text-center text-5xl mt-5 drop-shadow-lg  font-semibold ">Our <span className="text-primaryColor-0">Trainer</span></h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3  gap-4">

                {trainers.map((trainer) => (
                    <TrainerCard key={trainer._id} trainer={trainer} />
                ))}
            </div>
            
            <Cta></Cta>
        </div>
    );
};

export default TrainerList;

