
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";


// import useCart from "../hooks/useCart";

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>ZYMZOO | Dashborad</title>
            </Helmet>
            <div className="lg:flex w-full ">
                <div className="w-64 p-5 max-h-full rounded-r-2xl border-r-2 ">
                    <div className="text-center">
                        <h1 className="text-primaryColor-0 font-semibold text-2xl">Fitness Tracker</h1>
                        <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
                    </div>
                    <div className="text-white text-ceter mt-10 space-y-3">
                        <Link to='/dashboard/allSubscribers'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">All subscribers</button>
                        </Link>
                        <Link to='/dashboard/alltrainers'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">All Trainers</button>
                        </Link>
                        <Link to='/dashboard/apptrainer'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">Applied Trainer</button>
                        </Link>
                    </div>

                    <div className="divider  divider-neutral"></div>
                    {/* Home */}
                    <div className="text-white mt-10 space-y-3">
                        <Link to='/'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">Home</button>
                        </Link>
                        <Link to='/gallery'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">Gallary</button>
                        </Link>
                        <Link to='/trainer'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">Trainer</button>
                        </Link>
                        <Link to='/clasess'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">Clasess</button>
                        </Link>
                        <Link to='/formus'>
                            <button className="flex border-b-2 rounded-full shadow-inner shadow-white w-full mt-4 text-white text-sm  justify-center focus:text-primaryColor-0 px-2">Formus</button>
                        </Link>
                    </div>
                </div>

                <div className="flex p-4 max-w-6xl mx-auto ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;