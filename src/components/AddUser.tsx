import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxCross1, RxPlus } from 'react-icons/rx'
import axios from 'axios'
import Moment from 'moment';
export const AddUser = ({ modalOpen, handleOnClick }) => {
    const redirect = useNavigate()
    const formRef = useRef(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/products/",
            {
                "id": Math.floor(Math.random() * 122222) + 999999,
                "name": name,
                "price": price,
                "img": imageUrl,
                "status": status,
                'added_on':Moment().format('MMMM Do YYYY'),
            }
        )
        window.location.reload()

    }

    return (
        <div className={`${modalOpen ? "absolute" : "hidden"} top-0  bg-black/30 left-0 z-10 w-full h-screen`}>
            <div className="flex items-center justify-center h-full ">
                <div className='w-[600px] py-5 max-h-[600px] bg-white p-3 drop-shadow-lg relative'>
                    <h2 className='text-2xl font-normal mt-3'>Add Product</h2>
                    <hr />

                    <form ref={formRef} onSubmit={(e) => onSubmit(e)} className='grid grid-cols-2 gap-3 px-3 mt-3'>
                        <div className='flex flex-col text-lg col-span-2'>
                            <label className='text-slate-800' htmlFor="">Url</label>
                            <input
                                name="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                type="text" placeholder='Enter Image Url' className='text-sm border-b-[1px] border-forteryTextColor px-2 py-1 outline-none focus:border-sky-500' />
                        </div>

                        <div className='flex flex-col text-lg col-span-2'>
                            <label className='text-slate-800' htmlFor="">Name</label>
                            <input
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text" placeholder='Enter Name' className='text-sm border-b-[1px] border-forteryTextColor px-2 py-1 outline-none focus:border-sky-500' />
                        </div>





                        <div className='flex flex-col text-lg '>
                            <label className='text-slate-800' htmlFor="">Price</label>
                            <input
                                name="prissce" value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text" placeholder='Set a Price' className='text-sm border-b-[1px] border-forteryTextColor px-2 py-1 outline-none focus:border-sky-500' />
                        </div>


                        <div className='flex flex-col text-lg'>
                            <label className='text-slate-800' htmlFor="">Status</label>
                            <select
                                name="status"
                                onChange={(e) => setStatus(e.target.value)}
                                className='border-b-[1px] text-sm border-forteryTextColor outline-none px-2 py-1 focus:border-sky-600' id="">
                                <option value="">-------</option>
                                <option value="Draft">Draft</option>
                                <option value="Published">Published</option>
                            </select>
                        </div>

                        <button className='border-none mt-4 flex items-center gap-3 bg-secondaryTextColor py-2 px-3 rounded hover:bg-primaryTextColor transition-all duration-500 ease-out text-white'>
                            <RxPlus />
                            Add</button>

                    </form>




                    <div onClick={handleOnClick} className="absolute right-0 top-0 p-3">
                        <RxCross1 />
                    </div>


                </div>



            </div>
        </div>
    )
}
