import React, {useState} from 'react'
import NavBar from '../dash/navBar'
import SideBar from '../dash/sideBar'
import ahmed from '../../../assets/images/ahmed.jpg'

// ICONS 
import { FaPlus } from "react-icons/fa6";



function Profile() {
    const [profileImage, setProfileImage] = useState();

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(profileImage)
    return (
        <div className='w-full h-screen flex flex-row-reverse'>
            <div className='w-[85%]'>
                <NavBar />
                <div className='w-full h-screen bg-[#fffefea8]'>
                    <div className=''>
                        <div className='p-10 mb-5'> 
                            <h1 className='text-3xl font-semibold'>My Account</h1>
                        </div>
                        <div className='flex justify-around items-center'>
                            <div className='flex justify-start items-center flex-col gap-10 relative'>
                                <button className='absolute bottom-[40px] left-[90px] p-5 bg-violet-500 text-white rounded-full hover:bg-violet-600' onClick={() => document.getElementById("inputImage").click()}><FaPlus/></button>
                                <input className='hidden' type="file" accept='image/*' id='inputImage' onChange={handleImage} />
                                <img className='w-60 h-60 rounded-[50%] border-x-purple-700 border-[5px] border-solid' src={profileImage} alt="profile" />
                                <p>Change Profile Picture</p>
                            </div>
                            <div className='flex flex-col gap-7'>
                                <div className='flex flex-row items-center gap-5'>
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='First Name' />
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='Last Name' />
                                </div>
                                <div className='flex flex-row items-center gap-5'> 
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="email" placeholder='Email' />
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='Phone' />
                                </div>
                                <div className='flex flex-row items-center gap-5'>
                                    <select className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md px-3 text-[#808080e1] outline-none focus:border-violet-700' type="email" placeholder='Genre' >
                                        <option selected className='text-black'>Genre</option>
                                        <option value="" className='text-black'>Homme</option>
                                        <option value="" className='text-black'>Femme</option>
                                    </select>
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="date" placeholder='Date Of Birth' />
                                </div>
                                <div className='flex flex-row items-center gap-5'>
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='Country' />
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='City' />
                                </div>
                                <div className='flex flex-row items-center gap-5'>
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='Adresse' />
                                    <input className='w-60 h-9 bg-slate-50 border-[1px] border-solid border-[#80808081] rounded-md p-3 outline-none focus:border-violet-700' type="text" placeholder='Code Postal' />
                                </div>
                                <div className='flex justify-end'>
                                    <button className='w-28 h-9 border-[1px] border-solid border-indigo-700 rounded-md font-semibold hover:bg-violet-700 hover:text-white transition-all'>Save</button>
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
