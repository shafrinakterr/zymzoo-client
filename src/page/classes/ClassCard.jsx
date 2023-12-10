import { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from "react-router-dom";
const ClassCard = () => {
    const [classes, setclasses] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/classes')
        .then(res => {
            setclasses(res.data);
        })
    return (
        <div>
            <div className="mt-12">
                <h1 className="text-center space-y-3 text-5xl mb-5 drop-shadow-lg font-semibold">
                    Our all<span className="text-primaryColor-0"> classes</span>
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    classes.map(classe => <div key={classe._id}>

                        <section class=" body-font">
                            <div class="container shadow shadow-white px-5  mx-auto">
                                <div>
                                    <div class="p-4  w-full sha  sm:mb-0 mb-6">
                                        <div class="rounded-lg h-64 overflow-hidden">

                                            <img class="object-cover object-center h-full w-full" src={classe.image} alt="" />
                                        </div>
                                        <h2 class="text-xl font-medium title-font text-primaryColor-0 mt-5">{classe.className}</h2>
                                        <div className='flex justify-between'>
                                            <p class="text-white leading-relaxed mt-2">{classe.day}</p>
                                            <p class="text-white leading-relaxed mt-2">Time: {classe.time}</p>
                                        </div>
                                        <p class="text-white leading-relaxed mt-2">Duration: {classe.duration}</p>
                                        <p class="text-white leading-relaxed mt-2">Instructor: {classe.instructor}</p>
                                        <p class="text-white leading-relaxed mt-2">Location: {classe.location}</p>
                                        <Link to='/trainer'>
                                            <button class="border border-primaryColor-0 btn-outline  text-primaryColor-0 btn mt-3">
                                                Join Now
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ClassCard;