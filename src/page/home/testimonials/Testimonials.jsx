import auth1 from '../../../assets/image/tastimonial/auth1.jpg'
import auth2 from '../../../assets/image/tastimonial/auth2.jpg'
import auth3 from '../../../assets/image/tastimonial/auth3.jpg'
import auth4 from '../../../assets/image/tastimonial/auth4.jpg'
import auth5 from '../../../assets/image/tastimonial/auth5.jpg'
import auth6 from '../../../assets/image/tastimonial/auth6.jpg'
const Testimonials = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl mt-5 drop-shadow-lg  font-semibold ">Gym Glory  <span className="text-primaryColor-0">Moments</span></h1>
                <div className="divider divider-neutral text-primaryColor-0">ZYMZOO</div>
                <div className='grid mt-10 lg:grid-cols-3 p-5 grid-cols-1 md:grid-cols-2 gap-10'>
                    <div class="relative shadow-2xl  text-center border-2  bg-white text-gray-700  rounded-xl ">
                        <div class="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl  ">
                            <img className="rounded-full w-20 h-20 mx-auto"
                                src={auth1}
                            />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Jane Austen
                            </h5>
                            <p class="block text-sm font-sans  antialiased font-light leading-relaxed text-inherit">
                                Zymzoo transformed my fitness journey! The personalized training and motivating environment at Gym Zymzoo have been instrumental in achieving my goals. Highly recommend!"
                            </p>
                        </div>
                    </div>
                    <div class="relative text-center flex flex-col border-2  bg-white text-gray-700 shadow-2xl  rounded-xl ">
                        <div class="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl  ">
                            <img className="rounded-full w-20 h-20 mx-auto"
                                src={auth2}
                            />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Ernest Hemingway
                            </h5>
                            <p class="block text-sm font-sans  antialiased font-light leading-relaxed text-inherit">
                                Gym Zymzoo is more than a gym; it's a community. Thanks to their dedicated trainers, I've surpassed my fitness milestones. Joining was the best decision I made.
                            </p>
                        </div>
                    </div>
                    <div class="relative text-center flex flex-col border-2  bg-white text-gray-700   shadow-2xl  rounded-xl ">
                        <div class="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl  ">
                            <img className="rounded-full w-20 h-20 mx-auto"
                                src={auth3}
                            />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                J.K. Rowling
                            </h5>
                            <p class="block text-sm font-sans  antialiased font-light leading-relaxed text-inherit">
                                Exceptional results! Gym Zymzoo provided the perfect blend of challenging workouts and supportive community. I've never felt stronger and healthier.
                            </p>
                        </div>
                    </div>
                    <div class="relative text-center flex flex-col border-2  bg-white text-gray-700   shadow-2xl  rounded-xl ">
                        <div class="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl  ">
                            <img className="rounded-full w-20 h-20 mx-auto"
                                src={auth4}
                            />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Gabriel Garcia Marquez
                            </h5>
                            <p class="block text-sm font-sans  antialiased font-light leading-relaxed text-inherit">
                                Zymzoo, an inspiration at Gym Zymzoo. The trainers go above and beyond, creating a positive atmosphere that pushes you to achieve greatness. I'm in the best shape of my life!
                            </p>
                        </div>
                    </div>
                    <div class="relative text-center flex flex-col border-2  bg-white text-gray-700   shadow-2xl  rounded-xl ">
                        <div class="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl  ">
                            <img className="rounded-full w-20 h-20 mx-auto"
                                src={auth5}
                            />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Agatha Christie
                            </h5>
                            <p class="block text-sm font-sans  antialiased font-light leading-relaxed text-inherit">
                                Gym Zymzoo delivers on its promise. The diverse workouts, expert guidance, and friendly community make it the ultimate fitness destination. Grateful for my transformation journey!
                            </p>
                        </div>
                    </div>
                    <div class="relative text-center flex flex-col border-2  bg-white text-gray-700   shadow-2xl  rounded-xl ">
                        <div class="relative mx-4 -mt-6 overflow-hidden text-white  rounded-xl  ">
                            <img className="rounded-full w-20 h-20 mx-auto"
                                src={auth6}
                            />
                        </div>
                        <div class="p-6">
                            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Haruki Murakami
                            </h5>
                            <p class="block text-sm font-sans  antialiased font-light leading-relaxed text-inherit">
                                Zymzoo here, proud member of Gym Zymzoo. The tailored approach to fitness and the incredible support system have not only improved my physique but also my overall well-being.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;