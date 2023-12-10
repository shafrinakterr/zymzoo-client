import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
const Trainer = () => {

    return (
        <div>
            <div  className="-mb-8">
                <h1 className="text-center text-5xl mt-5 drop-shadow-lg  font-semibold ">Our team  <span className="text-primaryColor-0">coach</span></h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5 mt-20 justify-center">
                <div className="relative w-full mb-10 md:mb-0 p-4 border md:flex flex-col  shadow-md  rounded-2xl shadow-white ">
                    <div className="relative mx-auto   mt-4 overflow-hidden text-gray-700 bg-clip-border">
                        <img className="rounded-full w-48 h-48" src="https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-picture" />

                    </div>
                    <div className="text-center mt-3">
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <FaFacebook className=" text-xl  font-normal leading-relaxed " />
                            <RiInstagramFill className=" text-2xl  font-normal leading-relaxed " />
                            <FaTwitterSquare className=" text-2xl  font-normal leading-relaxed " />


                        </div>
                        <h4 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Jane Smith
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-primaryColor-0">
                            Fitness Coach
                        </p>
                    </div>

                </div>
                <div className="relative w-full  p-4 border flex flex-col  shadow-md rounded-2xl shadow-white ">
                    <div className="relative mx-auto   mt-4 overflow-hidden text-gray-700 bg-clip-border">
                        <img className="rounded-full w-48 h-48" src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-picture" />

                    </div>
                    <div className="text-center mt-3">
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <FaFacebook className=" text-xl  font-normal leading-relaxed " />
                            <RiInstagramFill className=" text-2xl  font-normal leading-relaxed " />
                            <FaTwitterSquare className=" text-2xl  font-normal leading-relaxed " />


                        </div>
                        <h4 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            John Doe
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-primaryColor-0">
                            Nutrition Specialist
                        </p>
                    </div>

                </div>
                <div className="relative w-full  p-4 border flex flex-col  shadow-md rounded-2xl shadow-white ">
                    <div className="relative mx-auto   mt-4 overflow-hidden text-gray-700 bg-clip-border">
                        <img className="rounded-full w-48 h-48" src="https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-picture" />

                    </div>
                    <div className="text-center mt-3">
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <FaFacebook className=" text-xl  font-normal leading-relaxed " />
                            <RiInstagramFill className=" text-2xl  font-normal leading-relaxed " />
                            <FaTwitterSquare className=" text-2xl  font-normal leading-relaxed " />


                        </div>
                        <h4 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Mike Johnson
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-primaryColor-0">
                            Personal Trainer
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Trainer;