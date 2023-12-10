import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const Alltrainers = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainers');
            console.log(res.data);
            return res.data
        }
    })
    return (
            <div >
                <div className="text-center">
                    <h1 className="text-white font-semibold text-5xl">All Trainers</h1> 
                    <div className="divider divider-neutral text-primaryColor-0">ZYMZOO</div>
                </div>
                <div className="overflow-x-auto w-[300px] lg:w-full">
                    <h1 className="text-primaryColor-0 text-2xl font-semibold">Total Trainers: {trainers.length}</h1>
                    <table className="table table-zebra mt-10">
                        <thead className="bg-[#310b4d] mb-5 border-0 uppercase text-primaryColor-0 text-sm">
                            <tr>
                                <th></th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Available time</th>
                                <th>Years of Experience</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-white ">

                            {
                                trainers.map((trainer, index) => <tr style={{ backgroundColor: '#010313' }} key={trainer._id}>
                                    <th>{index + 1}</th>
                                    <div className="avatar mt-5 mb-5">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={trainer.profileImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <td>{trainer.name}</td>

                                    <td className="font-bold">{trainer.availableHours} Hours</td>
                                    <th>
                                        <td className="font-bold">{trainer.yearsOfExperience} Years</td>
                                    </th>
                                    <td>
                                        
                                          <button className="border-2 btn-outline rounded-lg btn mb-3 mt-3 text-lg  hover:bg-none border-primaryColor-0 text-white">Pay</button>
                                       
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default Alltrainers;