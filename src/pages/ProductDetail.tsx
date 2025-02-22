import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const ProductDetail = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams()
    console.log(typeof (id))
    const loadProduct = async () => {
        const res = await axios.get(`http://localhost:5000/products/${id}/`);
        setProduct(res.data);
    }
    useEffect(() => { loadProduct() }, [])
    return (
        <div className='p-5'>
            <div className='mb-5'>
                <h2 className='text-primaryTextColor font-semibold text-xl'>Your Products</h2>
                <p className='text-ternaryTextColor font-bold  text-xs'>
                    <Link to="/">Home</Link> / <Link to="/products">Products </Link>/ <span className='text-forteryTextColor '>ProductDetail</span></p>
            </div>

            <div className='bg-white flex flex-col md:flex-row justify-center items-center mx-auto p-3'>
                <img className='w-[300px] h-[300px] object-contain' src={product.img} alt="" />
                <div>
                    <div className='my-4'>
                        <h2 className='font-bold text-lg'>Product ID: {product.id} </h2>
                    </div>
                    <hr />
                    <div className='flex text-sm mb-3'>
                        <h2 className='font-normal mr-4'>ProductName:</h2>
                        <span>{product.name}</span>
                    </div>
                    <div className='flex text-sm mb-3'>
                        <h2 className='font-normal mr-4'>Price:</h2>
                        <span>${product.price}</span>
                    </div>
                    <div className='flex text-sm mb-3'>
                        <h2 className='font-normal mr-4'>Status:</h2>
                        <span>{product.status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail