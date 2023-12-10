import React, { useContext, useState } from "react";
import { Authcontext } from "../../provider/AuthProvider";
import { MultiSelect } from "react-multi-select-component";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
// import MultiSelect from 'react-multi-select-component';

const Batrainer = () => {
    const { user } = useContext(Authcontext);

    // Options for the multi-select component
    const options = [
        { label: "Cardio", value: 'cardio' },
        { label: "Strength Training", value: 'stength' },
        { label: "Yoga", value: 'yoga' },
        { label: "Pilates", value: 'pilates' },
        { label: "HIIT", value: 'hiit' },
    ];

    // State for selected options in the multi-select component
    const [selected, setSelected] = useState([]);
    const handleSubmit = (e) => {
        const axiosPublic = useAxiosPublic();
        e.preventDefault();
        console.log("Selected Fruits:", selected);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const photo = form.photo.value;
        const week = form.timeWeek.value;
        const day = form.timeDay.value;
        const experience = form.experience.value;
        const otherInfo = form.otherInfo.value;
        console.log(name, email, age, photo, week, day, otherInfo, selected);
        const ApplyUserIfno = { name, email, age, photo, week, day, experience, otherInfo, selected }
        axiosPublic.patch('/applyTrainers', ApplyUserIfno)
            .then(response => {
                if (response.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Applied Succesfully',
                        customClass: {
                            container: 'custom-swal-container bg-red-300',
                            text: 'white text-xs',
                            title: 'custom-swal-title text-2xl text-white ',
                            confirmButton: 'hover:border-primaryColor-0 btn bg-primaryColor-0  text-black border-0 hover:bg-primaryColor-0',
                        },
                        color: 'white',

                        background: 'black',
                        buttonsStyling: false,
                    });
                }
            })
    };

    return (
        <div className="pt-28 max-w-6xl mx-auto">
            <div>
                <h1 className="text-center text-5xl mb-5 drop-shadow-lg font-semibold ">Be a <span className="text-primaryColor-0">Trainer</span></h1>
                <div className="divider divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <section className="text-white body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="lg:w-3/4 mx-auto md:w-1/2 bg-[#010313] shadow-xl border-t shadow-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <form onSubmit={handleSubmit}>
                            {/* Full Name and Email fields */}
                            <div className="lg:flex gap-3">
                                <div className="relative mb-4 lg:w-1/2">
                                    <label className="leading-7 text-sm text-white">Full Name</label>
                                    <input
                                        value={user?.displayName}
                                        type="text"
                                        name="name"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <div className="relative lg:w-1/2 mb-4">
                                    <label className="leading-7 text-sm text-white">Email</label>
                                    <input
                                        defaultValue={user?.email}
                                        readOnly
                                        type="email"
                                        name="email"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>

                            {/* Age and Photo fields */}
                            <div className="lg:flex gap-3">
                                <div className="relative mb-4 lg:w-1/2">
                                    <label className="leading-7 text-sm text-white">Age</label>
                                    <input
                                        placeholder="Enter your age"
                                        type="text"
                                        name="age"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <div className="relative lg:w-1/2 mb-4">
                                    <label className="leading-7 text-sm text-white">Photo</label>
                                    <input
                                        placeholder="Enter your Photo URL"
                                        type="photo"
                                        name="photo"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="lg:flex gap-3">
                                <div className="relative mb-4 lg:w-1/2">
                                    <label className="leading-7 text-sm text-white">Available Time in a week</label>
                                    <input
                                        placeholder="Enter your time"
                                        type="text"
                                        name="timeWeek"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <div className="relative lg:w-1/2 mb-4">
                                    <label className="leading-7 text-sm text-white">Available time in a day</label>
                                    <input
                                        placeholder="Eynter Your time in a day"
                                        type="text"
                                        name="timeDay"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>

                            {/* Multi-select component */}
                            <div className="flex text-black gap-3">

                                {/* Other info component */}
                                <div className="relative lg:w-1/2">
                                <label className="leading-7 text-sm text-white">Select Skills</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                    <p className="text-black">Selected Skills: {selected.map((item) => item.label).join(', ')}</p>
                                </div>
                                <div className="relative lg:w-1/2">
                                    <label className="leading-7 text-sm text-white">Years of Experience</label>
                                    <input
                                        placeholder="Enter years of experience"
                                        type="text"
                                        name="experience"
                                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className=" text-black gap-3">
                                {/* Other info component */}
                                <div className="mb-4 w-full">
                                    <label htmlFor="otherInfo" className="block text-white text-sm font-medium ">
                                        Other Info
                                    </label>
                                    <textarea
                                        id="otherInfo"
                                        name="otherInfo"
                                        placeholder="Type your other information"
                                        rows="4"
                                        className="form-input p-4 mt-1 block w-full"
                                    ></textarea>
                                </div>
                            </div>
                            <div className=" w-full md:flex justify-center mt-5 ">
                                <button className="btn w-full mx-auto bg-primaryColor-0 hover:bg-[#010313] hover:text-primaryColor-0 hover:border-primaryColor-0">Applied</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Batrainer;
