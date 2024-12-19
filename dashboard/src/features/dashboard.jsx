import React from 'react'

import NavBar from '../common/components/dash/navBar'
import SideBar from '../common/components/dash/sideBar'

function Dashboard() {
  return (
    <div className='w-full h-screen flex flex-row-reverse'>
      <div className='w-[85%]'>
        <NavBar/>
        <div>
        </div>
      </div>
      <div className='w-[15%]'>
        <SideBar/>
      </div>
    </div>
  )
}

export default Dashboard

