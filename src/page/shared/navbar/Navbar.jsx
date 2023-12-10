import React, { useContext } from 'react';
import logo from '../../../assets/image/logo/logo1.png'
import { NavLink } from 'react-router-dom';
import '../../../index.css'
import { Authcontext } from '../../../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(Authcontext)
    // dark mood
    const dark = () => {
        return document.querySelector("html").attributes['data-theme'].value = "dark"
    }
    const light = () => {
        return document.querySelector("html").attributes['data-theme'].value = "light"
    }


    // dark and light 
    const toggleDarkMode = e => {
        if (e.target.checked) {
            return dark();
        }
        return light();
    }



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navbar = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#C7EB0B] font-poppins  font-bold uppercase ml-5 " : "text-white font-bold uppercase ml-5"
            }
        >
            Home
        </NavLink>



        <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#C7EB0B] font-poppins  font-bold uppercase ml-5" : "text-white font-bold uppercase ml-5"
            }
        >
            Gallery
        </NavLink>


        <NavLink
            to="/trainer"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#C7EB0B] font-poppins  font-bold uppercase ml-5" : " text-white font-bold uppercase ml-5"
            }
        >
            Trainer
        </NavLink>


        <NavLink
            to="/clasess"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#C7EB0B] font-poppins  font-bold uppercase ml-5" : "text-white font-bold uppercase ml-5"
            }
        >
            Classes
        </NavLink>
        <NavLink
            to="/formus"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#C7EB0B] font-poppins  font-bold uppercase ml-5" : "text-white font-bold uppercase ml-5"
            }
        >
            Forums
        </NavLink>


        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#C7EB0B] font-poppins  font-bold uppercase ml-5 " : "text-white font-bold uppercase ml-5"
            }
        >
            Dashboard
        </NavLink>
    </>
    return (
        <div className="navbar px-8 lg:w-full fixed z-10 bg-[#010313] transparent text-white">
            <div className="navbar-start text-white">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu items-center menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div className='flex  lg:gap-3 items-center'>
                    <img className='w-14 md:w-28' src={logo} alt="" />
                    <p className="md:tracking-[5px] text-gradient  text-[#C7EB0B]   font-bold  md:text-[24px] uppercase font-poppins">ZYMZOO</p>
                </div>
            </div>
            <div className="navbar-center hidden items-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user ? (<div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                            </div>
                        </div>
                        <ul className="menu w-52 space-y-4 p-5 menu-sm bg-[#010313] border-primaryColor-0 border dropdown-content mt-3 z-[1] shadow rounded-box ">
                            <div className="w-28 mx-auto rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                            </div>
                            <h1 className='text-center text-xl'>{user.displayName}</h1>
                            <h1 className='text-center '>{user.email}</h1>
                            <button onClick={handleLogOut} className=' border-2 px-5 py-3 rounded-full shadow-inner shadow-primaryColor-0 btn-outline hover:bg-primaryColor-0 hover:text-black border-primaryColor-0 text-primaryColor-0  md:block" btn'>Log Out</button>
                        </ul>
                    </div>) : <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "btn rounded-full border btn-outline border-primaryColor-0 text-primaryColor-0 font-poppins  font-bold uppercase " : "hidden text-sm  font-bold uppercase  border-2 px-5 py-3 rounded-full shadow-inner shadow-primaryColor-0 btn-outline hover:bg-primaryColor-0 hover:text-black border-primaryColor-0 text-primaryColor-0  md:block"
                        }
                    >
                        logIn
                    </NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;