import React, { useState, useRef } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiOutlineDelete, AiOutlinePlus, AiFillFileImage } from 'react-icons/ai'
import { CiEdit } from 'react-icons/ci'
export const ImageUploader = () => {
    const imageInputField = useRef(null)
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState('No Selected Image')


    const handleImgDivClick = () => {
        imageInputField.current.click()
    }

    return (
        <>
            <div onClick={handleImgDivClick}
                className='border-dashed flex items-center justify-center border-[1px] w-full h-[300px] border-sky-600 cursor-pointer'>

                <input ref={imageInputField}
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                    hidden type="file" accept='image/*' className='' />
                {image ? <img src={image} className='w-full h-full object-contain' alt={fileName} />
                    : <>
                    <div className='flex flex-col items-center'>
                    <MdCloudUpload size={80} className='text-secondaryTextColor' />
                        <h3 className='text-2xl font-semibold'>Drop Your Image here</h3>
                    </div>
                    </>
                }
            </div >
            {image &&
            <section className='mt-3 bg-slate-100 text-sm rounded p-2 flex justify-between items-center'>
                <AiFillFileImage />
                <span>
                    {fileName}  </span>
                    <MdDelete onClick={() => {
                        setFileName("No Selected Image")
                        setImage(null)
                    }} />
              
            </section>}
        </>
    )
}
