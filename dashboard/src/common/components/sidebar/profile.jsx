import React from 'react'
import NavBar from '../dash/navBar'
import SideBar from '../dash/sideBar'
import ahmed from '../../../assets/images/ahmed.jpg'

// ICONS 
import { FaPlus } from "react-icons/fa6";



function Profile() {
    return (
        <div className='w-full h-screen flex flex-row-reverse'>
            <div className='w-[85%]'>
                <NavBar />
                <div>
                    <div>
                        <div>
                            <h1>My Account</h1>

                        </div>
                        <div className='flex justify-around items-center'>
                            <div className='flex justify-start items-center flex-col gap-5'>
                                <button><FaPlus/></button>
                                <img className='w-60 h-60 rounded-[50%]' src={ahmed} alt="" />
                                <p>Change Profile Picture</p>
                            </div>
                            <div>
                                <div>
                                    <input type="text" placeholder='Nom' />
                                    <input type="text" placeholder='Prenom' />
                                </div>
                                <div>
                                    <input type="email" placeholder='Email' />
                                    <input type="text" placeholder='Phone' />
                                </div>
                                <div>
                                    <input type="email" placeholder='Email' />
                                    <input type="date" placeholder='Date Of Birth' />
                                </div>
                                <div>
                                    <input type="text" placeholder='Country' />
                                    <input type="text" placeholder='City' />
                                </div>
                                <div>
                                    <input type="text" placeholder='Adresse' />
                                    <input type="text" placeholder='Code Postal' />
                                </div>
                                <div>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[15%]'>
                <SideBar />
            </div>
        </div>
    )
}

export default Profile
