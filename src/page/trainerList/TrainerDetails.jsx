

import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import TrainerSchedule from "./TrainerSchedule";


const TrainerDetails = () => {
    const { id } = useParams();
    const [trainer, setTrainer] = useState({})
    const axiosPublic = useAxiosPublic();
    axiosPublic.get(`/trainers/${id}`)
        .then(res => {
            setTrainer(res.data);

        })




    return (
        <div className="pt-28">
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden">

                            <img class="object-cover object-center h-full w-full" src={trainer.profileImage} alt="" />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img className="w-20 h-20 rounded-full" src={trainer.profileImage} alt="" />
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-xl text-primaryColor-0">Phoebe Caulfield</h2>
                                    <div class="w-12 h-1 bg-primaryColor-0 rounded mt-2 mb-4"></div>
                                    <p class="text-white">{trainer.description}</p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-primaryColor-0 text-white sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <div className="mb-10">
                                    <h1 className="text-center text-4xl mt-5 drop-shadow-lg  font-semibold ">Available time <span className="text-primaryColor-0">slot</span></h1>

                                </div>
                                <div className="overflow-x-auto md:flex gap-3">
                                    <div>

                                        <div >
                                            
                                            <div>
                                                {
                                                    trainer.timeSlots?.map((date, index) => (
                                                        <TrainerSchedule key={index} date={date} index={index} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/trainer'>
                                    <a class="text-primaryColor-0 mt-5 inline-flex items-center">Back to trainer
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrainerDetails;
