import img1 from '../../../../assets/image/about/img1.jpg'
import img2 from '../../../../assets/image/about/img2.jpg'
const About = () => {
    return (
        <div className="mt-5 p-5">
            <div>
                <h1 className="text-center text-5xl mb-5 drop-shadow-lg  font-semibold ">About <span className="text-primaryColor-0">us</span></h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
                <h3 className="text-xl text-center mb-10">Join Our Platform Today</h3>
            </div>
            <div className='lg:flex lg:gap-10  items-center'>
                <div className='flex-1 space-y-4 '>
                    <h4 className='text-primaryColor-0 font-semibold capitalize'>WHO WE ARE</h4>
                    <h1 className='md:text-5xl text-3xl '>The Best Gym & ZYMZOO Center.</h1>
                    <p className='text-sm'>Elevate your fitness at The Best Gym & Fitness Center—a premier destination with top-notch facilities, experienced trainers, and a motivating atmosphere. Join a community committed to health and strength, supported every step by our dedicated team.</p>
                    <div className="divider hidden lg:flex divider-neutral text-primaryColor-0"></div>
                    <div className='md:grid grid-cols-2  items-center gap-5 space-y-3'>
                        <div className='space-y-3'>
                            <h1 className='text-xl '>Gym and Fitness Center</h1>
                            <p className='text-sm'>At our cutting-edge Gym, empower your fitness journey as expert guidance.</p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl '>Nutrition Services
                            </h1>
                            <p className='text-sm'>"Revitalize well-being with personalized Nutrition Services, crafting plans for a healthier, balanced lifestyle</p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl '>Online Training</h1>
                            <p className='text-sm'>Elevate your fitness from anywhere with our Online Training, personalized workouts for your goals, anytime, anywhere."</p>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl '>Space Rentals</h1>
                            <p className='text-sm'>Unlock versatile spaces for your events with our Space Rentals, tailored for seamless gatherings and memorable experiences.</p>
                        </div>
                        <button className='bg-primaryColor-0 hover:bg-transparent border-primaryColor-0 hover:border-primaryColor-0  border-1 hover:text-white w-40 btn'>Discover more</button>
                    </div>
                </div>
                <div className='flex-1 md:mt-0 mt-5 relative'>
                    <img className=' md:mt-5 lg:mt-0 mt-0 ' src={img1} alt="" />
                    <img className='md:w-72 hidden md:block w-40 absolute -bottom-14 md:-bottom-8 -left-2' src={img2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;