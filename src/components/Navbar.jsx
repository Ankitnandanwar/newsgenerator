import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (

        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-black py-4 px-7 md:px-10'>
                <img src={assets.logo} alt="logo" className='w-28 cursor-pointer' />
                <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-2xl text-white cursor-pointer absolute right-8 top-6 md:hidden'>
                    {
                        mobileMenuOpen ? <IoMdClose className='text-white' /> : <RiMenu3Fill className='text-white' />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in gap-3
                ${mobileMenuOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    {/* searchbar */}
                    <li className='flex justify-center items-center text-white'>Home</li>
                    <li className='flex justify-center items-center text-white'>About</li>
                    <li className='flex justify-center items-center text-white'>Contact</li>
                    <li className='flex justify-center items-center text-white'>News</li>
                </ul>

                <div className='md:block hidden'>
                    <div className='flex items-center gap-6'>
                        <button className='bg-white px-2 py-1 rounded-sm hover:bg-[#ee1b8e] hover:text-white transition-all duration-300'>Get Started</button>
                        <button className='bg-white px-2 py-1 rounded-sm hover:bg-[#ee1b8e] hover:text-white transition-all duration-300'>Login</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar