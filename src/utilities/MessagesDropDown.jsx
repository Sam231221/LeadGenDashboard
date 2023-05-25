import React, { useEffect, useRef, useState } from 'react'
import { BsChatLeftText } from 'react-icons/bs'

export const MessagesDropDown = () => {
    const [open, setOpen] = useState(false);
    let MessagesBtnRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!MessagesBtnRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <button ref={MessagesBtnRef}  onClick={() => { setOpen(!open) }} className='relative border-none bg-none cursor-pointer'>
            <BsChatLeftText className=' w-[20px] h-[20px] text-primaryTextColor' />
            <span className='absolute  w-[20px] h-[20px] top-[-5px] right-[-8px] bottom-auto left-auto bg-green-500 text-white text-sm rounded-full'>8</span>

            <div
                className=
                {` ${open?'absolute':'hidden'}  before:content-[""] before:border-bg-[#eaedf1] before:border-t-[1px] 
                    before:border-l-[1px] before:absolute before:top-[-10px] before:right-5 before:h-5 before:w-5
                    before:bg-white before:rotate-[45deg] border
                    z-20 top-12 right-[-20px] bg-white drop-shadow-lg w-[300px] p-3`}>
                <div className='flex gap-2 items-center mt-3 mb-3'>
                    <h2 className='text-md'>You have 3 new messages</h2>
                    <a href='#' className='text-xs text-white py-2 px-3 rounded bg-blue-500 hover:bg-blue-500'>See all</a>
                </div>
                <hr />
                <ul>
                    <li><a className='flex gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">
                        <img className='w-[40px] h-[40px] object-cover rounded-full'
                            src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/messages-1.jpg" alt="" />

                        <div className='flex flex-col items-start'>
                            <h4 className='font-semibold '>Maria Hudson</h4>
                            <p className='text-zinc-800'>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p className='text-zinc-600 ml-2'>about 12 hrs. ago</p>
                        </div>

                    </a></li>

                    <li><a className='flex gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">
                        <img className='w-[40px] h-[40px] object-cover rounded-full'
                            src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/messages-2.jpg" alt="" />

                        <div className='flex flex-col items-start'>
                            <h4 className='font-semibold '>Anna nelson</h4>
                            <p className='text-zinc-800'>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p className='text-zinc-600 ml-2'>about 4 hrs. ago</p>
                        </div>

                    </a></li>

                    <li><a className='flex gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">
                        <img className='w-[40px] h-[40px] object-cover rounded-full'
                            src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/messages-3.jpg" alt="" />

                        <div className='flex flex-col items-start'>
                            <h4 className='font-semibold '>David Mulson</h4>
                            <p className='text-zinc-800'>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p className='text-zinc-600 ml-2'>about 5mins. ago</p>
                        </div>

                    </a></li>
                    <hr />
                    <a href='#' className='text-xs text-underline'>Show all</a>


                </ul>

            </div>
        </button>
    )
}
