import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/image/bg/img2.png'
import '../../index.css'
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Authcontext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import { Helmet } from "react-helmet-async";
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Login = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const { singInUser,google } = useContext(Authcontext);

    const handleLoginForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await singInUser(email, password);
            console.log(result.user);

            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You are now logged in.',
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
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: "Don't have an account",
                text: 'Please create a new account ',
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

        form.reset('');
    };
    const loginWithGoogle = () => {
        google()
            .then(res => {
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL,
                    badge: 'Bronze'
                }
                console.log(res.user, userInfo)
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data)
                    Swal.fire({
                        icon: "success",
                        title: "Good job!",
                        text: "You are successfully Logged in!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate(location?.state ? location.state : '/');
                })
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div>
            <Helmet>
                <title>ZYMZOO | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjE4YmF0Y2gxMC1hdW0tMTcuanBn.jpg)' }}>

                <div className="hero min-h-screen lg:mt-10 mt-20">
                    <div className="hero-content flex-col justify-end lg:flex-row-reverse">
                        <div className="text-center hidden lg:block flex-1 lg:text-left">
                            <img className='w-full animation ' src={img} alt="" />
                        </div>
                        <div className="card shadow-inner flex-1 shrink-0 w-full  shadow-white p-5 bg-[#070825]">
                            <h1 className="text-4xl text-primaryColor-0 font-bold">Login!</h1>
                            <form onSubmit={handleLoginForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white bg-[#01031300]">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Type your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" placeholder="Type your password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-white">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  hover:bg-primaryColor-0 border-2 border-primaryColor-0 shadow-inner shadow-primaryColor-0 text-primaryColor-0 hover:text-black rounded-full btn-outline">Login</button>
                                </div>
                            </form>
                            <div className="text-center w-[70%] mx-auto">
                                <p className="text-center mt-5 text-white">Or log in With <hr className=" mx-auto" /></p>
                                <button onClick={loginWithGoogle} className='btn mb-5 text-lg w-full capitalize text-primary-color rounded-full-full mt-5'><FcGoogle className='flex text-2xl rounded-full'></FcGoogle>Sing in Google</button>
                            </div>
                            <p className='text-sm text-center'>Haven't an accout <span className='text-primaryColor-0 font-semibold underline'><Link to='/singUp'>Please Register</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;