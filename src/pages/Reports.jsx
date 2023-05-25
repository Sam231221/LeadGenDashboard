import React from 'react'
import WebTrafficChart from '../components/WebTrafficChart'
import { BudgetChart } from '../components/BudgetChart'
import { BiDotsHorizontal } from 'react-icons/bi'
import Line2Chart from '../components/Line2Chart'
import BarChart from '../components/BarCharts'

const Reports = () => {
    return (
        <div className='p-5'>
            <div className='mb-5'>
                <h2 className='text-primaryTextColor font-semibold text-xl'>Reports</h2>
                <p className='text-ternaryTextColor font-bold  text-xs'>Home / <span className='text-forteryTextColor '>Reports</span></p>
            </div>


            <div className="grid gap-3 grid-col-1 sm:grid-cols-2">

                <div className='shadow-lg bg-white rounded p-3'>
                    <div className='flex  justify-between items-center'>
                        <h2 className='font-bold text-primaryTextColor text-lg'>Recent Sales | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                        <BiDotsHorizontal className='text-forteryTextColor' />
                    </div>
                    <Line2Chart />
                </div>

                <div className='shadow-lg bg-white rounded p-3'>
                    <div className='flex  justify-between items-center'>
                        <h2 className='font-bold text-primaryTextColor text-lg'>Recent Sales | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                        <BiDotsHorizontal className='text-forteryTextColor' />
                    </div>
                    <BarChart />
                </div>

                <div className='shadow-lg bg-white rounded p-3'>
                    <div className='flex  justify-between items-center'>
                        <h2 className='font-bold text-primaryTextColor text-lg'>Recent Sales | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                        <BiDotsHorizontal className='text-forteryTextColor' />
                    </div>
                    <WebTrafficChart />
                </div>

                <div className='shadow-lg bg-white rounded p-3'>
                    <div className='flex  justify-between items-center'>
                        <h2 className='font-bold text-primaryTextColor text-lg'>Recent Sales | <span className='text-xs text-forteryTextColor'>Today</span></h2>
                        <BiDotsHorizontal className='text-forteryTextColor' />
                    </div>
                    <BudgetChart />
                </div>



            </div>
        </div>
    )
}
export default Reports
