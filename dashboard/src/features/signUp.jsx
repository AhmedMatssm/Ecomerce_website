import React from 'react'
import {Link} from 'react-router-dom'
// ICONS
import { IoMdArrowBack } from "react-icons/io";
import { BsPerson } from "react-icons/bs";

function SignUp() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[500px] h-[600px] my-auto bg-indigo-700 flex flex-col rounded-md '>
                <div>
                    <div className='p-5'>
                        <Link to='/'><IoMdArrowBack className='text-[30px] text-white' /></Link>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <span ><BsPerson className='text-[60px] text-white' /></span>
                        <p className='w-[58%] text-center text-white font-light'>Hey there! You can start by creating a new account</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className=" flex flex-col justify-center items-center gap-3 py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="name" name="name" type="text" placeholder="Full Name" className="peer placeholder-transparent h-10 w-[280px] border-b-[1px] border-gray-400 text-white focus:outline-none focus:borer-rose-600 bg-transparent" />
                                <label for="name" className="absolute left-0 -top-3.5 text-gray-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm">Full Name</label>
                            </div>
                            <div className="relative">
                                <input id="email" name="email" type="email" placeholder="Email" className="peer placeholder-transparent h-10 w-[280px] border-b-[1px] border-gray-400 text-white focus:outline-none focus:borer-rose-600 bg-transparent" />
                                <label for="email" className="absolute left-0 -top-3.5 text-gray-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm">Email</label>
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" placeholder="Password" className="peer placeholder-transparent h-10 w-[280px] border-b-[1px] border-gray-400 text-white focus:outline-none focus:borer-rose-600 bg-transparent" />
                                <label for="password" className="absolute left-0 -top-3.5 text-gray-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm">Password</label>
                            </div>
                            <div className="relative">
                                <input id="confirmPassword" name="confirmPassword" type="password" className="peer placeholder-transparent h-10 w-[280px] border-b-[1px] border-gray-400 text-white focus:outline-none focus:borer-rose-600 bg-transparent" placeholder="Confirm Password" />
                                <label for="confirmPassword" className="absolute left-0 -top-3.5 text-gray-100 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-100 peer-focus:text-sm">Confirm Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className=" w-[280px] h-10 bg-white text-indigo-800 rounded-md px-2 py-1">SIGN UP</button>
                    </div>
                    <div className='text-center mt-5'>
                        <p className='text-gray-400'>Do you have an account? <Link to="/signIn" className='text-white'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
