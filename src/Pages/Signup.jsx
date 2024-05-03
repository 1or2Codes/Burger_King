import React from 'react'
import signupimg from '../signup/Signup_guy.jpg'
import yourbugking from '../signup/yourbugking.png'
import { NavLink } from 'react-router-dom' 
import Form from '../components/Form'


function Signup() {
  return (
    <div className='flex'>
        <div className='w-1/2'><img src={signupimg} alt = 'an image' /></div>
        <div className='w-1/2 bg-orange-100'>
            <div className='text-center flex-col mt-3'>
              <img src={yourbugking} alt = 'a logo' className='max-w-xs m-auto'/>
              <p className='text-xs mt-3 font-medium'>
                Sign up to get started with <span className='underline'> 
                <NavLink to ='/'>  YourBurgerKing </NavLink></span>
              </p>
            </div>
            <Form />
        </div>
    </div>
  )
}

export default Signup