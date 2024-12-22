import React from 'react'
import ahmed from '../../../assets/images/ahmed.jpg'
// ICONS
import { GrNotification } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function NavBar() {
    return (
        <div>
            <div className=''>
                <div className='w-full h-16 bg-white flex justify-between items-center flex-row-reverse px-10 shadow-ShadowNav'>
                    <div className='flex justify-center items-center flex-row-reverse gap-6'>
                        <div className='flex justify-center items-center gap-4'>
                            <img className='w-10 h-10 rounded-[50%] border-[1px] border-solid border-[#000000]' src={ahmed} alt="photo" />
                            <span>Ahmed mouatassim</span>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <span><GrNotification className='w-5 h-5'/></span>
                            <span><MdFavoriteBorder className='w-6 h-6'/></span>
                        </div>
                    </div>
                    <div className="relative ">
                        <div className="">
                            <input className="w-60 h-8 bg-slate-200 rounded-lg px-3 outline-none focus:border-[1px] border-solid border-purple-500" type="text" name="" placeholder="Search"/>
                                <a href="#" className=""><span className=''><CiSearch className='w-5 h-5 absolute top-2 right-2 translate-y-[-2px]'/></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
