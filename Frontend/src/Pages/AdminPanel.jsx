import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user);

    return (
        <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
            {/* Sidebar Section */}
            <aside className='bg-gray-200 min-h-full w-full max-w-60 customShadow'>
                <div className='h-32 flex justify-center items-center flex-col'>
                    <div className='text-5xl cursor-pointer relative flex justify-center'>
                        <div className="text-bold">
                            <div className="text-3xl cursor-pointer">
                                {
                                    user?.profilepic ? (
                                        <img
                                            src={user?.profilepic}
                                            className='w-10 h-10 rounded-full'
                                            alt={user?.name}
                                        />
                                    ) : (
                                        <FaUserCircle className='w-10 h-10' />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                    {/* Uncomment if role is needed */}
                    {/* <p className='text-sm'>{user?.role}</p> */}
                </div>

                {/* Navigation */}
                <div>
                    <nav className='grid p-4'>
                        <Link to="all-products" className='px-2 py-1 hover:bg-slate-100'>
                            All Products
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Main Content Section */}
            <main className='w-full h-full p-2'>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminPanel;
