import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHamburger, FaLocationArrow, FaShoppingBag } from "react-icons/fa";
import Logo from '../homeImages/transBurgerLogo.png'


function Navbar() {
  return (
    <div className='flex justify-between px-8 py-3 bg-orange-100 '>
        
        <ul className='flex  w-1/3 items-center gap-5 font-bold text-lg font-sans text-yellow-950'>
            <li><NavLink to="signup">{ FaHamburger }</NavLink></li>
            <li><NavLink to="order" className='hover:text-red-600  '>Order</NavLink></li>
            <li><NavLink to="offers" className='hover:text-red-600 '>Offers</NavLink></li>
            <li><NavLink to="menu" className='hover:text-red-600 '>Menu</NavLink></li>
            <li><NavLink to="delivery" className='hover:text-red-600 '>Delivery</NavLink></li>
            <li><NavLink to="more" className='hover:text-red-600 '>More</NavLink></li>
        </ul>

        <ul className='flex w-2/3 gap-4 justify-end items-center'>
          <li><NavLink to="/"> <img src={ Logo } alt='logo' className='max-w-[100px]'/> </NavLink></li>
          <li>
            <NavLink to="">
            <span className='font-bold flex gap-2 items-center text-yellow-950'> <FaLocationArrow /> For item availability <span className='underline font-medium '>Choose your location</span></span> 
            </NavLink>
          </li>
          <li className='flex py-1 px-5 bg-red-600 text-white rounded-2xl font-semibold'>
            <NavLink to="signup">
              <button>Sign Up</button>
            </NavLink>
          </li>
          <li>
          <NavLink to="" >
              <button className='flex gap-2 bg-yellow-950 rounded-2xl px-5 py-1 items-center font-semibold text-orange-100'> <FaShoppingBag /> $ 0.00 </button>
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Navbar