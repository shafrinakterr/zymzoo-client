import { Link } from 'react-router-dom';
import error from '../../assets/image/logo/error.png';

const Error = () => {
    return (
        <div className='h-[650px] flex justify-center items-center'>
            <div>
                <img className='mx-auto' src={error} alt="" />
                <Link to='/' class=" flex justify-center" href="#">
                    <button
                        className="btn  justify-center border-primaryColor-0 text-white btn-outline  flex "
                    >
                        Go to home
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;