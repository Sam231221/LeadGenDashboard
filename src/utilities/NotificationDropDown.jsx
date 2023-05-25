import { useEffect, useRef, useState } from 'react'
import { BsBell, BsExclamationCircle, BsXCircle } from "react-icons/bs";
import { BiCheckCircle, BiInfoCircle } from 'react-icons/bi';
export const NotificationDropdown = () => {

  const [open, setOpen] = useState(false);
  let NotificationsBtnRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!NotificationsBtnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <button ref={NotificationsBtnRef} onClick={() => { setOpen(!open) }}
      className='relative border-none bg-none cursor-pointer'>

      <BsBell className='w-[20px] h-[20px] text-primaryTextColor' />
      <span className='absolute  w-[20px] h-[20px] top-[-5px] right-[-8px] bottom-auto left-auto bg-sky-500 text-white text-sm rounded-full'>3</span>
      
      <div
        className={` ${open ? 'absolute' : 'hidden'} before:content-[""] before:border-bg-[#eaedf1] before:border-t-[1px] 
        before:border-l-[1px] before:absolute before:top-[-10px] before:right-5 before:h-5 before:w-5
        before:bg-white before:rotate-[45deg] border
        z-20 top-12 right-[-20px] bg-white drop-shadow-lg w-[300px] p-3'`}>
        <div className='flex items-center p-2 gap-3 mt-3 mb-3'>
          <h2 className='text-sm'>You have 4 new notifications</h2>
          <a href='#' className='text-xs text-white py-2 px-3 rounded bg-blue-500 hover:bg-blue-500'>See all</a>
        </div>
        <hr />
        <ul>
          <li><a className='flex gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">
            <BsExclamationCircle className='text-yellow-500 w-[40px] h-[40px] ' />

            <div className='flex flex-col items-start leading-5'>
              <h4 className='font-semibold '>Lorem Ipmsm</h4>
              <p className='text-zinc-800 '>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p className='text-zinc-600 ml-8'>about 12 hrs. ago</p>
            </div>

          </a></li>

          <li><a className='flex items-center gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">

            <BsXCircle className='text-red-500 w-[40px] h-[40px] ' />
            <div className='flex flex-col items-start leading-5'>
              <h4 className='font-semibold '>Dicta reprehenderit</h4>
              <p className='text-zinc-800'>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p className='text-zinc-600 ml-8'>about 4 hrs. ago</p>
            </div>

          </a></li>

          <li><a className='flex items-center gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">

            <BiCheckCircle className='text-green-500 w-[40px] h-[40px] ' />
            <div className='flex flex-col items-start leading-5'>
              <h4 className='font-semibold '>Atque rerum nesciunt</h4>
              <p className='text-zinc-800'>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p className='text-zinc-600 ml-8'>about 5mins. ago</p>
            </div>

          </a></li>

          <li><a className='flex items-center gap-2 px-3 py-2 bg-none hover:bg-secondaryBgColor transition-all duration-500 ease-out  text-xs' href="">

            <BiInfoCircle className='text-sky-500 w-[40px] h-[40px] ' />
            <div className='flex flex-col items-start leading-5'>
              <h4 className='font-semibold '>Sit rerum fuga </h4>
              <p className='text-zinc-800'>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p className='text-zinc-600 ml-8'>about 5mins. ago</p>
            </div>

          </a></li>

          <hr />
          <a href='#' className='text-xs text-underline '>Show all</a>


        </ul>

      </div>

    </button>
  )
}
