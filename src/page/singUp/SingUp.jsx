import { useContext, useState } from 'react';
import '../../index.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../../provider/AuthProvider';
import { Helmet } from "react-helmet-async";
import useAxiosPublic from '../../hooks/useAxiosPublic';
const SingUp = () => {
    const axiosPublic = useAxiosPublic()
    const [showPassword, setShowPassword] = useState(false);
    const [register, setRegister] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser, logOut } = useContext(Authcontext);
    const navigate = useNavigate()
    const handleSingUpForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const accept = form.checkbox.checked;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, photo, password);
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Password should be at least 6 characters',
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
            return;
        }


        const isPasswordValid = (password) => {
            return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(password);
        };

        if (!isPasswordValid(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and be at least 8 characters long.',
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
            return;
        }
        else if (!accept) {
            Swal.fire({
                icon: 'warning',
                title: 'Accept our trems and condition',
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
            return;
        }

        createUser(name, email, password, photo)
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    name: name,
                    email: email,
                    photo: photo,

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            Swal.fire({
                                icon: 'success',
                                title: 'Account created Successful',
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
                            logOut()
                            navigate(location?.state ? location.state : '/')
                        }
                    })
              
                return;
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Already have an account',
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
                return
            })
    }
    return (
        <div >
            <Helmet>
                <title>ZYMZOO | SingUp</title>
            </Helmet>
            <div className="hero" style={{ backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjE4YmF0Y2gxMC1hdW0tMTcuanBn.jpg)' }}>

                <div className="hero  w-1/2 lg:mt-32 lg:mb-10">
                    <div className="lg:flex-row-reverse w-full">
                        <div className="card shadow-inner shadow-white p-5 bg-[#070825]">
                            <h1 className="text-4xl text-center text-primaryColor-0 font-bold">Sing Up!</h1>
                            <form onSubmit={handleSingUpForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white bg-[#01031300]">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type your name" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white bg-[#01031300]">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Type your email" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white bg-[#01031300]">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="text-black input input-bordered" required />
                                    <span className="absolute text-black top-12 right-2 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </span>
                                </div>
                                <div className="form-control mt-6">
                                    <div className="flex items-center">
                                        <input type="checkbox" name="checkbox" id="terms" className="mr-2" />
                                        <label className="text-xs" htmlFor="terms">
                                            Accept Our Terms and Conditions
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  hover:bg-primaryColor-0 border-2 border-primaryColor-0 shadow-inner shadow-primaryColor-0 text-primaryColor-0 hover:text-black rounded-full btn-outline">Sing Up</button>
                                </div>
                            </form>
                            <p className='text-sm text-center'>Already have an accout <span className='text-primaryColor-0 font-semibold underline'><Link to='/login'>Please Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingUp;