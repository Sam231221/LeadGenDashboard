import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Help = () => {

    return (
        <div className='p-2'>
            <div className='mb-5'>
                <h2 className='text-primaryTextColor font-semibold text-xl'>Help & Support Centre</h2>
                <p className='text-ternaryTextColor font-bold  text-xs'>
                    <Link to="/">Home</Link> / <span className='text-forteryTextColor '>Help</span></p>
            </div>

            <div className='bg-white flex flex-col md:flex-row justify-center items-center mx-auto p-3'>
                <img className='w-[300px] h-[300px] object-contain' src="https://th.bing.com/th/id/R.6dba6e2a6353dbb68b4170baba2d32e1?rik=wt2GWytChQFovQ&riu=http%3a%2f%2fwww.miyens.com%2fwp-content%2fuploads%2f2017%2f12%2fcustomer-support-header.png&ehk=EEozZfFnLObj%2bXZbqHYhL%2bCWXaJZ4D%2b50kd%2byzfkmXM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <div className=''>
                    <div className='flex flex-col sm:flex-row text-sm mb-3'>
                        <h2 className='font-normal mr-4'>Contact:</h2>
                        <span>061-78333</span>
                    </div>
                    <div className='flex flex-col sm:flex-row text-sm mb-3'>
                        <h2 className='font-normal mr-4'>Email:</h2>
                        <span>supportleadgen@info.com</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Help