import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
const AllSubs = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: allSubs = [], refetch } = useQuery({
        queryKey: ['allSubs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/news');
            console.log(res.data);
            return res.data
        }
    })
    return (
        <div >
            <div className="text-center">
                <h1 className="text-white font-semibold text-2xl lg:text-5xl">AllSubcribes</h1>
                <div className="divider hidden lg:block  divider-neutral text-primaryColor-0">ZYMZOO</div>
            </div>
            <div className="overflow-x-auto w-[300px] lg:w-full">
                <h1 className="text-primaryColor-0 text-2xl font-semibold">Total subscribers: {allSubs.length}</h1>
                <table className="table table-zebra mt-5 ">
                    <thead className="bg-[#310b4d] border-0  mb-5 uppercase text-primaryColor-0 text-sm">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody  className="text-white">

                        {
                            allSubs.map((user, index) => <tr className="text-sm"  style={{ backgroundColor: '#010313' }} key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td></td>

                                <td></td>
                                <th>
                                    {user.email}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSubs;