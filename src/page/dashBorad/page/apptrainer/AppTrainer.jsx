import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { FaRegEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { RxCross1 } from "react-icons/rx";
const AppTrainer = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: applyTrainers = [], refetch } = useQuery({
        queryKey: ['applyTrainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/applyTrainers');
            console.log(res.data);
            return res.data
        }
    })
    return (
        <div >
            <div className="text-center">
                <h1 className="text-white font-semibold text-5xl">Apply Trainers</h1>
                <div className="divider  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <div className="overflow-x-auto  w-[300px] lg:w-full">
                <h1 className="text-primaryColor-0 text-2xl font-semibold">Total Trainers: {applyTrainers.length}</h1>
                <table className="table table-zebra mt-10">
                    <thead className="bg-[#310b4d] mb-5  border-0 uppercase text-primaryColor-0 text-sm">
                        <tr>
                            <th>No</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Years of Experience</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-white ">

                        {
                            applyTrainers.map((trainer, index) => <tr style={{ backgroundColor: '#010313' }} key={trainer._id}>
                                <th>{index + 1}</th>
                                <div className="avatar mt-5 mb-5">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={trainer.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>

                                <td className="font-bold">{trainer.experience} Years</td>
                                <td className="text-black">
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="border-2 btn-outline rounded-lg btn mb-3 mt-3 text-lg  hover:bg-none border-primaryColor-0 text-white " onClick={() => document.getElementById('my_modal_1').showModal()}><FaRegEye /></button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box text-md relative">
                                            <div className="avatar">
                                                <div className="w-24 rounded-full">
                                                    <img src={trainer.photo} />
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-xl">{trainer.name}</h3>
                                            <p className="py-1 font-semibold text-xl">{trainer.email}</p>
                                            <p className="py-1 text-lg">{trainer.week} Available Time in a week</p>
                                            <p className="py-1 text-lg">{trainer.day} Available Time in a Day</p>
                                            <p className="py-1 text-lg ">{trainer.experience} Years of expreience</p>
                                            <div className="flex gap-2 flex-wrap">
                                                <p className="text-lg">Skills:</p>
                                                {
                                                    trainer.selected.map(skils => <p className="text-lg">{skils.label},</p>)
                                                }
                                            </div>
                                            <p className="py-1"><span className="font-semibold text-lg">Other Info:</span> {trainer.otherInfo}</p>
                                            <div className="mt-5 flex gap-2">
                                                <button className="btn bg-green-600 hover:bg-green-500 text-white ml-2">Confirmation</button>
                                                <button className="btn ml-2 bg-red-600 text-white hover:bg-red-600">Rejct</button>
                                            </div>
                                            <div className="modal-action absolute -top-7 left-5 right-0">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}

                                                    <button className="btn  text-black "><RxCross1 className="font-bold" /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    <button ></button>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppTrainer;