import React from 'react'
import { useState } from 'react';
import Logo from '../../assets/logo.png'

function Navbar() {
    

    return (
        <nav className='fixed  w-full h-18 px-6 bg-white py-4 flex flex-row justify-between border-b-2 border-pink-500 rounded-b-xl shadow-xl'>
           <img src={Logo} className='w-auto h-10' alt="" />
            <ul className='text-xl text-black flex fex-row gap-12  h-full items-center'>
                <li className='cursor-pointer p-2 rounded-lg hover:bg-slate-300'>Home</li>
                <li className='cursor-pointer p-2 rounded-lg hover:bg-slate-300'>About</li>
                <li className='cursor-pointer p-2 rounded-lg hover:bg-slate-300'>Services</li>
                <li className='cursor-pointer p-2 rounded-lg hover:bg-slate-300'>Blog</li>
                <li className='cursor-pointer p-2 rounded-lg hover:bg-slate-300'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar