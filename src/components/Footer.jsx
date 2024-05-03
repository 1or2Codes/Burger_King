import React from 'react'
import { FaAtlas, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-[#2b0200]'>
            <div className='w-[80%] m-auto'>
                <div className='flex flex-wrap justify-left py-20'>
                    <div className='w-[50%]'>
                        <h1 className='font-extrabold text-[30px] text-[#f5ebdc]'>BK INFOR</h1>
                        <p className='text-[#9a9089]'>About BK</p>
                        <p className='text-[#9a9089]'>FAQs</p>
                        <p className='text-[#9a9089]'>Policies</p>
                        <p className='text-[#9a9089]'>Get in touch</p>
                        <p className='text-[#9a9089]'>Terms & Conditions</p>
                        <p className='text-[#9a9089]'>Guest Trac</p>
                        <p className='text-[#9a9089]'>Trademarks</p>
                    </div>
                    <div>
                        <h1 className='font-extrabold text-[30px] text-[#f5ebdc]'>BK INFOR</h1>
                        <p className='text-[#9a9089]'>Careers</p>
                        <p className='text-[#9a9089]'>Privacy Policy</p>
                        <p className='text-[#9a9089]'>Modern Slavery statement</p>
                        <p className='text-[#9a9089]'>Tax Strategy</p>
                    </div>
                </div>
                <div className='bg-[#2b0200] pb-10'>
                    <div className='flex justify-between py-10 border-y'>
                        <div>
                            <h1 className='font-extrabold text-[30px] text-[#f5ebdc]'>BURGER KING</h1>
                            <p className='text-[#9a9089]'>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>
                        </div>
                        <div className='flex items-center gap-3 text-2xl text-[#f5ebdc]'>
                            <Link to=''><div className='flex items-center'>
                                <FaAtlas /> EN
                            </div></Link>
                            <FaInstagram />
                            <FaFacebook />
                            <FaYoutube />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer