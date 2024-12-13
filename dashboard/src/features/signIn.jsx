import React from 'react'
import {Link} from 'react-router-dom'
// ICONS
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFingerprint } from "react-icons/md";
function SignIn() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
            <div className='w-[450px] h-[550px] my-auto bg-white flex flex-col rounded-md'>
                <div>
                    <div className='p-5'>
                        <Link to='/'><IoMdArrowBack className='text-[30px] text-black' /></Link>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <span ><MdOutlineFingerprint className='text-[60px] text-black' /></span>
                        <p className='w-[58%] text-center text-black font-light'>Enter your login credentials to get access</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className=" flex flex-col justify-center items-center gap-3 py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="email" name="email" type="email" placeholder="Email" className="peer placeholder-transparent h-10 w-[260px] border-b-[1px] border-gray-400 text-black focus:outline-none focus:borer-rose-600 bg-transparent" />
                                <label for="email" className="absolute left-0 -top-3.5 text-gray-900 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm">Email</label>
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" placeholder="Password" className="peer placeholder-transparent h-10 w-[260px] border-b-[1px] border-gray-400 text-black focus:outline-none focus:borer-rose-600 bg-transparent" />
                                <label for="password" className="absolute left-0 -top-3.5 text-gray-900 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className=" w-[260px] h-10 bg-indigo-600 text-white rounded-md px-2 py-1">LOGIN</button>
                    </div>
                    <div className='text-center mt-5'>
                        <p className='text-gray-500'>Don't have an account? <Link to="/signUp" className='text-black'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
