import React from 'react'
import { BiCart, BiDotsHorizontal } from 'react-icons/bi'
import { AreaChart2 } from '../components/AreaChart2'
import product1 from '../assets/images/product-1.jpg'
import { BudgetChart } from '../components/BudgetChart'
import WebTrafficChart from '../components/WebTrafficChart'
import { BsCurrencyDollar, BsPeople } from 'react-icons/bs'
const Dashboard = () => {
    return (
        <div className='p-5'>
            <div className='mb-5'>
                <h2 className='text-primaryTextColor font-semibold text-xl'>Dashboard</h2>
                <p className='text-ternaryTextColor font-bold  text-xs'>Home / <span className='text-forteryTextColor '>Dashboard</span></p>
            </div>

            <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                <div className='grid gap-3 grid-cols-1 sm:grid-cols-4 sm:col-span-2  lg:grid-cols-3'>

                    <div className='shadow-lg bg-white rounded col-span-4 sm:col-span-2 lg:col-span-1  p-5'>
                        
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Sales | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='flex items-center mt-5'>
                            <span className='bg-secondaryBgColor w-[60px] h-[60px] p-4 rounded-full'><BiCart className='text-secondaryTextColor text-2xl' /></span>
                            <div className='flex ml-3 flex-col'>
                                <h2 className='text-3xl font-extrabold text-primaryTextColor'>145</h2>
                                <span className='text-xs mt-2 font-bold text-green-600'>+12%  <span className='text-forteryTextColor'>increase</span> </span>

                            </div>
                        </div>

                    </div>

                    <div className='shadow-lg bg-white rounded col-span-4 sm:col-span-2 lg:col-span-1 p-5'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Revenue | <span className='text-xs text-forteryTextColor'>This month</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='flex items-center mt-5'>
                            <span className='bg-secondaryBgColor w-[60px] h-[60px] p-4 rounded-full'><BsCurrencyDollar className='text-secondaryTextColor text-2xl' /></span>
                            <div className='flex ml-3 flex-col'>
                                <h2 className='text-3xl font-extrabold text-primaryTextColor'>$3,455</h2>
                                <span className='text-xs mt-2 font-bold text-green-600'>+8%  <span className='text-forteryTextColor'>increase</span> </span>

                            </div>
                        </div>
                    </div>

                    <div className='shadow-lg bg-white rounded col-span-4 sm:col-span-4 lg:col-span-1 p-5'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-primaryTextColor text-lg'>Customers | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='flex items-center mt-5'>
                            <span className='bg-secondaryBgColor w-[60px] h-[60px] p-4 rounded-full'><BsPeople className='text-secondaryTextColor text-2xl' /></span>
                            <div className='flex ml-3 flex-col'>
                                <h2 className='text-3xl font-extrabold text-primaryTextColor'>1244</h2>
                                <span className='text-xs mt-2  font-bold text-red-600'>-12%  <span className='text-forteryTextColor'>decrease</span> </span>

                            </div>
                        </div>
                    </div>


                    <div className='shadow-lg bg-white rounded col-span-4  p-5'>
                        <div className='flex justify-between items-center mb-3'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Reports  <span className='text-xs text-forteryTextColor'>| Today</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>
                        <AreaChart2 />
                    </div>


                    {/* recent sales */}
                    <div className='shadow-lg bg-white rounded col-span-4 p-5'>
                        <div className='flex  justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Recent Sales | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='sm:flex items-center justify-between mt-2'>
                            <div className="text-xs">
                                <select className='focus:outline-none border-[1px] focus:border-secondaryTextColor' name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                                <span className='ml-1'>entries per page</span>
                            </div>

                            <div className='mt-3 sm:mt-0'>
                                <input type="text" className='border-[1px] text-xs focus:outline-none
                                focus:border-secondaryTextColor 
                                border-primaryTextColor  py-2 px-3' placeholder="Search here..." />
                            </div>
                        </div>


                        <div className='py-2 overflow-y-auto'>
                            <table className='table border-collapse w-full mt-4 mb-2'>
                                <thead className='bg-secondaryBgColor '>
                                    <tr>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>S.N</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Customer</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Product</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Price</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">1</a>
                                        </td>
                                        <td className='p-2 text-xs text-gray-700'>Sameer Shahi</td>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">Laptop Ryzen</a>
                                        </td>
                                        <td className='p-2 text-xs text-gray-700'>$120000</td>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <span className='bg-green-500 rounded-full text-white py-1 px-2'>Approved</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">2</a>
                                        </td>
                                        <td className='p-2 text-xs text-gray-700'>Sameer Shahi</td>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">Laptop Ryzen</a>
                                        </td>
                                        <td className='p-2 text-xs text-gray-700'>$120000</td>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <span className='bg-yellow-500 rounded-full text-white py-1 px-2'>Pending</span>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                            <p className='text-xs p-2 border-t-2'>Showing 1 to 5 of 5 entries</p>
                        </div>



                    </div>
                    {/* Top Selling */}
                    <div className='shadow-lg bg-white rounded col-span-4 p-5'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Top Selling | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='py-2 overflow-y-auto'>
                            <table className='table border-collapse w-full mt-4 mb-2'>
                                <thead className='bg-secondaryBgColor '>
                                    <tr>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Preview</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Product</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Price</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Sold</th>
                                        <th className='p-2 text-xs font-semibold tracking-wide text-left'>Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">
                                                <img src={product1} className='object-contain w-10 h-10' alt="" />
                                            </a>
                                        </td>
                                        <td className='p-2 text-xs text-gray-700'>Lorem ipsum dolor sit amet.</td>
                                        <td className='p-2 text-xs text-gray-700'>
                                            <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">$56</a>
                                        </td>
                                        <td className='p-2 text-xs text-gray-700'>89</td>
                                        <td className='p-2 text-xs text-gray-700'>
                                            $5,789
                                        </td>
                                    </tr>


                                </tbody>

                            </table>
                            <p className='text-xs p-2 border-t-2'>Showing 1 to 5 of 5 entries</p>
                        </div>



                    </div>

                </div>


                <div className='gap-3 col-span-3 md:col-span-4 lg:col-span-1 '>

                    {/* Recent Activity */}
                    <div className='shadow-lg bg-white rounded p-5'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Recent Activity | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='mt-5'>


                            <div className='text-xs flex gap-3 justify-between '>
                                <div className='text-forteryTextColor relative activity-time pb-4'> 32min</div>
                                <div className="w-3 h-3 z-10 shrink-0  bg-green-500 rounded-full"></div>

                                <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>

                            <div className='text-xs flex gap-3 justify-between '>
                                <div className='text-forteryTextColor relative activity-time pb-4'> 32min</div>
                                <div className="w-3 h-3 z-10 shrink-0  bg-sky-500 rounded-full"></div>

                                <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>


                            <div className='text-xs flex gap-3 justify-between '>
                                <div className='text-forteryTextColor relative activity-time pb-4'> 32min</div>
                                <div className="w-3 h-3 z-10 shrink-0  bg-red-500 rounded-full"></div>

                                <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>



                            <div className='text-xs flex gap-3 justify-between '>
                                <div className='text-forteryTextColor relative activity-time pb-4'> 32min</div>
                                <div className="w-3 h-3 z-10 shrink-0  bg-yellow-500 rounded-full"></div>

                                <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>


                            <div className='text-xs flex gap-3 justify-between '>
                                <div className='text-forteryTextColor relative activity-time pb-4'> 32min</div>
                                <div className="w-3 h-3 z-10 shrink-0  bg-green-500 rounded-full"></div>

                                <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>




                        </div>
                    </div>

                    {/* Budget Report */}
                    <div className='shadow-lg bg-white rounded p-5 mt-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Budegt Report | <span className='text-xs text-forteryTextColor'>This month</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <BudgetChart />
                    </div>

                    {/* WebTraffic Report */}
                    <div className='shadow-lg bg-white rounded p-5 mt-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>Wesbite Traffic | <span className='text-xs text-forteryTextColor'>This month</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <WebTrafficChart />
                    </div>

                    <div className='shadow-lg bg-white rounded p-5 mt-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-primaryTextColor text-lg'>News & Updates | <span className='text-xs text-forteryTextColor'>This month</span></h2>
                            <BiDotsHorizontal className='text-forteryTextColor' />
                        </div>

                        <div className='mt-5'>
                            <div className='text-xs flex gap-3 justify-between '>
                                <div className='text-forteryTextColor relative activity-time'> 32min</div>
                                <div className="z-10 bg-green-500 rounded-full"></div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>
                            <div className='text-xs flex gap-3 justify-between'>
                                <div className='text-forteryTextColor relative activity-time'> 32min</div>
                                <div className=" z-10 bg-green-500 rounded-full"></div>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, consequuntur.</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Dashboard
