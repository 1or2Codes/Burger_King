import React from 'react'
import { IoLogoApple } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

function Homephone() {
  return (
    <div className='bg-[#efe1cc] h-[100vh] flex gap-6 px-8 items-center'>
        <div className='flex justify-end w-2/3 '>
            <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/ec025695dc78c9198b572d6b0aadda878415b78c-1340x2014.png?w=750&q=40&fit=max&auto=format" alt="phone sample" className='w-[440px] -translate-y-20'/>
        </div>
        <div className='w-1/3 leading-10'>
          <span className='font-extrabold text-[4rem] text-yellow-950 '>Save $$$ with offers on demand</span>
          <div className='flex gap-9 mt-10'>
            <div className='p-1 bg-black rounded-lg '>
              <a href="https://apps.apple.com/gb/app/burger-king-app-food-drink/id1062524641" className='flex justify-between'>
                <IoLogoApple color="#efe1cc" className='text-[40px] '/>
                <div className='text-[#efe1cc] leading-3'>
                  <p className='text-[8px] mb-0'>Download on the</p>
                  <p className='text-lg'>App Store</p>
                </div>
              </a>
            </div>
            <div className='p-1 bg-black rounded-lg '>
              <a href="https://play.google.com/store/apps/details?id=com.emn8.mobilem8.nativeapp.bkuk&hl=en_GB&pli=1" className='flex justify-between items-center'>
                <FaGooglePlay color="#efe1cc" className='text-[30px] '/>
                <div className='text-[#efe1cc] leading-3'>
                  <p className='text-[8px] mb-0'>GET IT ON </p>
                  <p className='text-lg'>Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <p className='leading-5 text-[13px] font-semibold mt-10 text-yellow-950'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
        </div>
    </div>
  )
}

export default Homephone