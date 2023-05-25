import React, { useState } from 'react'
import { FaBars, FaMagento } from 'react-icons/fa';
import { RxDashboard, RxTriangleDown } from "react-icons/rx";
import { BsBell, BsCart, BsCartFill, BsChatLeftText } from "react-icons/bs";
import { IoChatbubbleOutline, IoHelpOutline, IoMenuOutline, IoPeopleOutline, IoSearchOutline, IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";
import profile from '../assets/images/profile.jpg'
import banner from '../assets/images/banner.png'
import { Link } from 'react-router-dom';
const index = ({ children }) => {
    const [isOpen, setSideBarOpen] = useState(false)
    const toggleMenu = () => {
        setSideBarOpen(!isOpen)
    }

    const handleActiveLink = () => {

    }
    return (
            <div className="relative w-full">

                {/* Sidebar */}
                <div className={`${isOpen ? "w-[80px]" : 'w-[244px]'} h-screen navigation fixed left-0 h-screen bg-white border-l-[15px] border-white`}>
                    <div className='group w-full gap-1 flex items-center text-white'>

                        <span className="icon text-4xl py-3 px-3">
                            <FaMagento className='text-secondaryTextColor' />
                        </span>
                        <span className="text-2xl text-primaryTextColor  font-black py-3">LeadGen</span>

                    </div>
                    <ul className='w-full mt-5 md:active:w-[244px]'>

                        <li onClick={handleActiveLink} className='relative group w-full rounded-tl-full rounded-bl-full hover:bg-[#EEF2FA]'>
                            <Link to='/' className='relative group flex w-full hover:text-secondaryTextColor items-center' >
                                <span className="icon relative py-3 block px-5 text-center">
                                    <RxDashboard className="text-ternaryTextColor group-hover:text-secondaryTextColor text-2xl" />

                                </span>
                                <span className="text-primaryTextColor group-hover:text-secondaryTextColor font-semibold relative block py-3 px-2 whitespace-nowrap text-sm">Overview</span>
                            </Link>
                        </li>


                        <li onClick={handleActiveLink} className='relative group w-full rounded-tl-full rounded-bl-full hover:bg-[#EEF2FA]'>
                            <Link to='/reports' className='relative group flex w-full hover:text-secondaryTextColor items-center' >
                                <span className="icon relative py-3 block px-5 text-center">
                                    <IoStatsChartOutline className="text-ternaryTextColor group-hover:text-secondaryTextColor text-2xl" />

                                </span>
                                <span className="text-primaryTextColor group-hover:text-secondaryTextColor font-semibold relative block py-3 px-2 whitespace-nowrap text-sm">Reports</span>
                            </Link>
                        </li>


                        <li onClick={handleActiveLink} className='relative group w-full rounded-tl-full rounded-bl-full hover:bg-[#EEF2FA]'>
                            <Link to='/customers' className='relative flex w-full hover:text-blue-500 items-center'>
                                <span className="icon relative py-3 block px-5 text-center">
                                    <IoPeopleOutline className="text-ternaryTextColor group-hover:text-secondaryTextColor text-2xl" />

                                </span>
                                <span className="text-primaryTextColor group-hover:text-secondaryTextColor font-semibold relative block py-3 px-2 whitespace-nowrap text-sm">Customers</span>
                            </Link>
                        </li>
                        <li onClick={handleActiveLink} className='relative group w-full rounded-tl-full rounded-bl-full hover:bg-[#EEF2FA]'>
                            <Link to='/products' className='relative flex w-full hover:text-blue-500 items-center'>
                                <span className="icon relative py-3 block px-5 text-center">
                                    <BsCart className="text-ternaryTextColor group-hover:text-secondaryTextColor text-2xl" />

                                </span>
                                <span className="text-primaryTextColor group-hover:text-secondaryTextColor font-semibold relative block py-3 px-2 whitespace-nowrap text-sm">Products</span>
                            </Link>
                        </li>


                        <li onClick={handleActiveLink} className='relative group w-full rounded-tl-full rounded-bl-full hover:bg-[#EEF2FA]'>
                            <Link to='/help' className='relative flex w-full hover:text-blue-500 items-center'>
                                <span className="icon relative py-3 block px-5 text-center">
                                    <IoHelpOutline className="text-ternaryTextColor group-hover:text-secondaryTextColor text-2xl" />

                                </span>
                                <span className="text-primaryTextColor group-hover:text-secondaryTextColor font-semibold relative block py-3 px-2 whitespace-nowrap text-sm">Help</span>
                            </Link>
                        </li>


                    </ul>
                    <div className={`${isOpen ?'hidden':'mt-5 p-5'}`}>
                        <div className="bg-white border rounded drop-shadow-lg px-2 py-4 flex flex-col items-center justify-end">
                            <img src={banner} className='w-[60px] -[60px] object-contain' alt="" />
                            <h1 className='text-sm font-bold leading-8'>Unlimited Acess</h1>
                            <p className='text-xs text-center text-gray-700 '>Upgrage to plan to get unlimited reports</p>
                            <button className='bg-none border-[1px] border-primaryTextColor py-2 px-3 text-xs hover:bg-secondaryTextColor hover:border-none hover:text-white mt-5' >Upgrade</button>
                        </div>

                    </div>
                </div>

                {/* Main */}
                <div className={`${isOpen ? "w-[calc(100%-80px)] left-[80px]" : "w-[calc(100%-244px)] left-[244px]"} relative transition duration-500 ease-out absolute  min-h-screen bg-primaryBgColor`}>
                    <div className="topbar z-10 sticky top-0 bg-white w-full h-[60px] flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            {/* Hamburger */}
                            <IoMenuOutline onClick={toggleMenu} className='w-[30px] h-[30px] cursor-pointer' />
                            <IoSearchOutline className='w-[30px] h-[30px] cursor-pointer sm:hidden' />
                            {/* SearchBar */}
                            <div className='border-[1px] min-w-[300px] border-ternaryTextColor hidden lg:flex focus:border-secondaryTextColor items-center'>
                                <input className='border-none w-full py-2 px-4 outline-none text-primaryTextColor text-sm' type="text" placeholder='Search for ...' />
                                <IoSearchOutline className='w-[40px] h-[40px] py-2 px-2 cursor-pointer text-primaryTextColor' />
                            </div>

                        </div>

                        <div className='hidden sm:flex gap-4 pr-4'>
                            <IoSearchOutline className='w-[25px] h-[25px] lg:hidden cursor-pointer text-primaryTextColor' />
                            <button className='relative border-none bg-none cursor-pointer'>
                                <BsBell onClick={toggleMenu} className='w-[20px] h-[20px] text-primaryTextColor' />
                                <span className='absolute  w-[20px] h-[20px] top-[-5px] right-[-8px] bottom-auto left-auto bg-red-500 text-white text-sm rounded-full'>3</span>
                            </button>
                            <button className='relative border-none bg-none cursor-pointer'>
                                <BsChatLeftText onClick={toggleMenu} className=' w-[20px] h-[20px] text-primaryTextColor' />
                                <span className='absolute  w-[20px] h-[20px] top-[-5px] right-[-8px] bottom-auto left-auto bg-green-500 text-white text-sm rounded-full'>8</span>
                            </button>

                            <label for="check" className='bg-gray-200 cursor-pointer relative w-16 h-8 rounded-full border drop-shadow-sm'>
                                <input type="checkbox" id="check" className='sr-only peer' />
                                <span className="w-2/5 h-3/4 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-9 transition-all duration-500">
                                </span>
                            </label>

                            <div className='flex items-center'>
                                <img src={profile} className='rounded-full w-7 h-7 object-cover' alt="" />
                                <span className='ml-3 font-semibold hidden md:block text-secondaryTextColor cursor-pointer text-sm'>Mr. Shahi</span>
                                <RxTriangleDown className='text-secondaryTextColor' />
                            </div>

                        </div>
                    </div>


                    {children}



                </div>
            </div>
    )
}
export default index;