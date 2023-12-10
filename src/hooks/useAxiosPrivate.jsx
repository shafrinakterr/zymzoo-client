
import axios from "axios";

const axiosPrivete = axios.create({
    baseURL: 'https://fitness-tracker-server-swart.vercel.app'
})
const useAxiosPrivate = () => {
    return axiosPrivete;
};

export default useAxiosPrivate;