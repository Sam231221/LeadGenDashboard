import React, { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { CiEdit } from 'react-icons/ci'
import axios from 'axios'

import { Pagination } from '../components/Pagination'
import { BsEye } from 'react-icons/bs'
import { AddUser } from '../components/AddUser'
import { RxCross1, RxPlus } from 'react-icons/rx'
import { GrUpdate} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Products = () => {
    const [modalOpen, setModalOpen] = useState(false)
   
    const [updatemodalOpen, setUpdateModalOpen] = useState(false)
    const [id, setId] = useState(null)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [status, setStatus] = useState('')

    const [products, setProducts] = useState([])


    const [query, setQuery] = useState('')

    const [sortedvalue, setSortedValue] = useState('')
    const [currentPage, setCurrentPage] = useState(0);

    let pageLimit = 10

    const [sortFilterValue, setSortFilterValue] = useState("");
    const [operation, setOperation] = useState("");

    const sortOptions = ['name', 'address', 'email', 'phone', 'status']


    const loadProductData = async (start, end, increase, opType = null, filterOrSortValue) => {
        switch (opType) {
            case "search":
                setOperation(opType);
                //since we are not sorting in search case
                setSortedValue("");
                return await axios
                    .get(`http://localhost:5000/products?q=${query}&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setProducts(response.data);
                        setCurrentPage(currentPage + increase);

                    })
                    .catch((err) => console.log(err));

            case "sort":
                setOperation(opType);
                setSortFilterValue(filterOrSortValue)
                return await axios
                    .get(`http://localhost:5000/products?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setProducts(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err))

            case "filter":
                setOperation(opType);
                setSortFilterValue(filterOrSortValue);
                return await axios.get(`http://localhost:5000/products?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setProducts(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err))

            default:
                return await axios.get(`http://localhost:5000/products?_start=${start}&_end=${end}`)
                    //0 to 3
                    .then((response) => {
                        setProducts(response.data);
                        setCurrentPage(currentPage + increase)
                    })
                    .catch((err) => console.log(err));

        }
    }

    const handleSearch = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
        console.log(query)
        loadProductData(0, pageLimit, 0, "search");
    }


    const handleReset = () => {
        //reset the input value
        setOperation("");
        setQuery("");
        setSortFilterValue("");
        setSortedValue("")
        loadProductData(0, pageLimit, 0);
    }

    const handleSort = async (e) => {
        let beSorted = e.target.value;
        setSortedValue(beSorted);
        loadProductData(0, pageLimit, 0, "sort", beSorted);
    }


    const handleFilter = async (e) => {
        console.log(typeof (e.target.value))
        if (!e.target.value == "") {
            loadProductData(0, pageLimit, 0, "filter", e.target.value)
        }
        if (e.target.value == "") {
            loadProductData(0, pageLimit, 0)
        }
    }

    const handleAddModalOnClick = () => {
        setModalOpen(!modalOpen)
    }

    const handleUpdateModalOnClick = (e) => {
        console.log(e.target.id)
        setId(e.target.id)
        setUpdateModalOpen(!updatemodalOpen)

    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}/`);
        loadProductData(0, pageLimit, 0)
    };

    const loadSingleProduct = async () => {
        const product = await axios.get(`http://localhost:5000/products/${id}/`);
        console.log(product.data);
        setName(product.data.name)
        setPrice(product.data.price)
        
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/products/${id}/`,
            {
                "name": name,
                "price": price,
                "img": imageUrl,
                "status": status,
            }
        )
        window.location.reload()

    }
    useEffect(()=>{
        
        loadSingleProduct()

    },[id])
    useEffect(() => {

        loadProductData(0, pageLimit, 0)
    }, [])

    return (
        <div className='p-5'>
            <div className='mb-5'>
                <h2 className='text-primaryTextColor font-semibold text-xl'>Your Products</h2>
                <p className='text-ternaryTextColor font-bold  text-xs'>Home / <span className='text-forteryTextColor '>Products</span></p>
            </div>
            <div className='shadow-lg bg-white rounded p-5'>

                <div className='flex flex-col sm:flex-row gap-3 items-center justify-between mt-2'>
                    <div className="text-xs flex items-center gap-3">
                        <span className='ml-1'>Filter By Status:</span>
                        <select onChange={(e) => handleFilter(e)} className='focus:outline-none border-[1px] focus:border-secondaryTextColor' name="" id="">
                            <option value="">----</option>
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>

                        </select>

                    </div>

                    {/* */}
                    <button
                        onClick={handleAddModalOnClick}
                        className='flex items-center border-[1px] hover:border-sky-600 hover:text-sky-600 gap-2 border-black-500 p-2'>
                        <AiOutlinePlus className='text-xs' />
                        <span className='text-xs'>Add Product</span>
                    </button>
                </div>


                <div className='py-2 overflow-y-auto'>
                    <table className='table border w-full mt-4 mb-2'>
                        <thead className='bg-secondaryBgColor '>
                            <tr>
                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>ID</th>
                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>Img</th>
                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>Name</th>
                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>Price</th>
                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>Added On</th>

                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>Status</th>
                                <th className='p-2 text-sm font-semibold tracking-wide text-left'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, i) => (
                                <tr key={i + 1}>
                                    <td className='p-2 text-sm text-gray-700'>
                                        <a className='text-primaryTextColor hover:text-secondaryTextColor' href="#">{product.id}</a>
                                    </td>
                                    <td className='p-2 text-sm text-gray-700'>
                                        <img className='h-10  object-cover' src={product.img} alt={product.name} />
                                    </td>
                                    <td className='p-2 text-sm text-gray-700'>{product.name}</td>

                                    <td className='p-2 text-sm text-gray-700'>${product.price}</td>

                                    <td className='p-2 text-sm text-gray-700'>{product.added_on}</td>
                                    <td className='p-2 text-xs text-gray-700'>
                                        <span className={`${product.status == "Draft" ? 'text-gray-600' : "text-green-500"} bg-secondaryBgColor font-bold rounded-full  py-1 px-2`}>{product.status}</span>
                                    </td>
                                    <td className='p-2 text-xs text-gray-700'>
                                        <div className="flex gap-3">
                                            <div onClick={e => handleUpdateModalOnClick(e)} id={product.id} className='bg-secondaryBgColor p-2 cursor-pointer'>
                                                <CiEdit className='pointer-events-none text-blue-500 text-lg' />
                                            </div>
                                            <Link to={`/products/${product.id}/`} className='bg-secondaryBgColor p-2 cursor-pointer'>
                                                <BsEye className='text-gray-600 text-lg' />
                                            </Link>
                                            <div onClick={() => deleteProduct(product.id)} className='bg-secondaryBgColor p-2 cursor-pointer'>
                                                <AiOutlineDelete className='text-red-500 text-lg' />
                                            </div>


                                        </div>
                                    </td>

                                </tr>
                            ))}



                        </tbody>

                    </table>
                    <Pagination data={products} currentPage={currentPage} pageLimit={pageLimit} operation={operation}
                        sortFilterValue={sortFilterValue} loadUserData={loadProductData} />

                </div>


            </div>

            {/* Modal PopUps */}
            <AddUser modalOpen={modalOpen} handleOnClick={handleAddModalOnClick} />
            <div className={`${updatemodalOpen ? "absolute" : "hidden"} top-0  bg-black/30 left-0 z-10 w-full h-screen`}>
                <div className="flex items-center justify-center h-full ">
                    <div className='w-[600px] py-5 max-h-[600px] bg-white p-3 drop-shadow-lg relative'>
                        <h2 className='text-2xl font-normal mt-3'>Update Product</h2>
                        <hr />

                        <form  onSubmit={(e) => onSubmit(e)} className='grid grid-cols-2 gap-3 px-3 mt-3'>
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

                            <button type='submit' className='border-none mt-4 text-white flex items-center gap-3 bg-secondaryTextColor py-2 px-3 rounded hover:bg-primaryTextColor hover:text-white transition-all duration-500 ease-out '>
                                <GrUpdate className='text-blue-500 mr-3' />
                                Update</button>

                        </form>




                        <div onClick={handleUpdateModalOnClick} className="absolute right-0 top-0 p-3">
                            <RxCross1 />
                        </div>


                    </div>



                </div>
            </div>


        </div>
    )
}


export default Products