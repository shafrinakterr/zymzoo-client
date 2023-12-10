import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../../provider/AuthProvider";

const Cta = () => {
    const {loading} = useContext(Authcontext)
    return (
        <div>
            <section class="text-gray-600 shadow-inner shadow-white p-10 mt-10 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <div className="space-y-3">
                            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-primaryColor-0">Join Our Team of Expert Fitness Trainers</h1>
                            <p className="text-white">Join our dynamic team of expert fitness trainers, inspiring and empowering others on their wellness journey. If you're a certified professional committed to helping individuals achieve fitness goals, apply now. Make a positive impact, foster community, and be a key player in transforming lives!</p>
                        </div>

                        <Link to='/beAtrainer'>

                            <button class="flex-shrink-0 hover:bg-primaryColor-0 border-2 border-primaryColor-0 shadow-inner shadow-primaryColor-0 text-primaryColor-0 hover:text-black rounded-full btn-outline   py-2 px-8 focus:outline-none  text-lg mt-10 sm:mt-0">CTA</button>

                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cta;