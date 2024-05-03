import React from 'react'
import Yourbugking from '../signup/yourbugking.png'
import Ilogo from '../homeImages/trans_i_logo.png'
import { NavLink } from 'react-router-dom'

function Homebrown() {
  return (
    <div className='flex justify-between px-8 pt-8 pb-4 bg-yellow-950'>
        <div>
            <img src={Yourbugking} alt="yourbugking img" className='max-w-[13rem]' />
            <p className='text-white font-bold text-base'>Welcome! You can earn points with every purchase and use them to redeem rewards.</p>
        </div>
        <div>
            <NavLink to="learnmore">
            <div className="rounded-2xl px-2 py-1 flex gap-2 border"> 
                <img src={Ilogo} alt="i_logo" className='max-w-[25px]'/>
                <p className='text-white font-bold'>Learn More</p>
            </div>
            </NavLink>
        </div>
    </div>

  )
}

export default Homebrown