import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

// ICONS
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";


function SideBar() {
    return (
        <div>
            <div className='w-full h-auto min-h-screen  bg-white shadow-ShadowSide'>
                <div className=' flex justify-center items-center'>
                    <img className='w-40 ' src={logo} alt="logo" />
                </div>
                <div className='my-10 pl-5'>
                    <div className='  p-3 mb-3'>
                        <Link to='/' className='flex justify-start items-center gap-3'>
                            <span><RxDashboard /></span>
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <div className=' p-3 mb-3'>
                        <Link to='/profile' className='flex justify-start items-center gap-3'>
                            <span><CgProfile /></span>
                            <span>Profile</span>
                        </Link>
                    </div>
                    <div className=' p-3 mb-3'>
                        <Link className='flex justify-start items-center gap-3'>
                            <span><CiShop /></span>
                            <span>Products</span>
                        </Link>
                    </div>
                    <div className=' p-3 mb-3'>
                        <Link className='flex justify-start items-center gap-3'>
                            <span><MdOutlineContactSupport /></span>
                            <span>Support</span>
                        </Link>
                    </div>
                    <div className=' p-3 mb-3'>
                        <Link className='flex justify-start items-center gap-3'>
                            <span><IoSettingsOutline /></span>
                            <span>Settings</span>
                        </Link>
                    </div>
                    <div className=' p-3 mb-3'>
                        <Link className='flex justify-start items-center gap-3'>
                            <span><IoIosLogOut /></span>
                            <span>Log out</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
