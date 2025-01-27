import React, { useState } from 'react'

import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../Store/userslice';

const Header = () => {
    const user = useSelector(state => state?.user?.user)
    console.log("user header", user)

    const dispatch =useDispatch()

    const handlelogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: 'include'
        })
        const data = await fetchData.json()

        if (data.success) {
            toast.success(data.message)
            dispatch(setUserDetails(null))
        }
        if (data.error) {
            data.error(data.message)
        }
    }

    const [menuDisplay, setmenuDisplay] = useState(false);

    //search product 
    const navigate =useNavigate();
    const handleSearch =(e)=>{
        const {value}= e.target

        if(value){
            navigate(`/search?q=${value}`)
        }else{
            navigate('/search')
        }

    }

    return (
        <header className='h-16 shadow-md bg-white fixed w-full z-40 '>
            <div className='h-full container mx-auto  flex items-center justify-between'>
                <div>
                    <Link to={"/"}>
                        <h1 className='px-5 text-4xl'>SJ-Cart</h1>
                    </Link>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full'>
                    <input 
                    type="text" 
                    placeholder='Search here....' 
                    onChange={handleSearch}
                    className='w-full outline-none' />
                    <div className='text-lg bg-red-600 min-w-[50px] min-h-7 flex  items-center justify-center rounded-r-full text-white cursor-pointer  '>
                        <IoSearchSharp />
                    </div>
                </div>
                <div className='flex items-center gap-7'>

                    <div className="relative group " onClick={() => setmenuDisplay(prev => !prev)}>
                        <div className="text-3xl cursor-pointer">
                            {
                                user?.profilepic ? (
                                    <img src={user?.profilepic} className='w-10 h-10 rounded-full' alt={user?.name} />
                                ) : (
                                    <FaUserCircle />
                                )
                            }

                        </div>
                        {
                            menuDisplay && (
                                <div className="hidden group-hover:block absolute bg-white p-2 shadow-md rounded ">
                                    <nav>
                                        <Link to={"Admin-Panel"} className='whitespace-nowrap hover:underline'onClick={() => setmenuDisplay(prev => !prev)}>Admin Panel</Link>
                                    </nav>
                                </div>

                            )
                        }

                    </div>


                    <div className='text-2xl '>
                        <span><FaCartArrowDown /> </span>
                        <div className='curcur-pointer bg-red-500 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute top-2'>
                            <p className='text-sm '>0</p>
                        </div>
                    </div>

                    <div>
                        {
                            user?._id ? (
                                <button onClick={handlelogout} className='curcur-pointer'>Logout</button>
                            )
                                : (
                                    <Link to={"/login"}>
                                        <button className='curcur-pointer'>Login</button>
                                    </Link>
                                )
                        }

                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header