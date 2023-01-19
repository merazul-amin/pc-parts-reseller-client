import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import Spinner from '../../../SharedPages/Spinner/Spinner';
import SmallSpinner from '../../../SharedPages/Spinner/SmallSpinner';
import { BiChevronRightCircle } from "react-icons/bi";
import { ColorRing } from 'react-loader-spinner'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ThreeDots } from 'react-loader-spinner'
const ProductsCategories = () => {
    const [productLoading, setProductLoading] = useState(false);
    const { isLoading, error, data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('https://server-gules-beta.vercel.app/categories').then(res =>
                res.json()
            )
    })
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
    };
    return (
        <div className='w-[90%] mx-auto mb-20 '>
            <h1 className='text-4xl mb-5 font-bold text-center text-sky-600'>Product Categories</h1>
            {
                isLoading ?
                    <Spinner></Spinner> :
                    <div className='relative'>
                        <h1 className='text-2xl font-bold'>Browse Products By Category</h1>
                        {/* This is for loading Modal */}
                        <div className=''>
                            {
                                productLoading ? <div>
                                    <Modal
                                        open={true}
                                        // onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div className='w-[30%] mx-auto'>
                                                <ColorRing
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    ariaLabel="blocks-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass="blocks-wrapper"
                                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                                />
                                            </div>
                                        </Box>
                                    </Modal>
                                </div> : ''
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                            {
                                categories.length > 0 && categories.map((category, index) =>
                                    <div key={index}>
                                        <img className='w-[250px] h-[150px] rounded-lg' src={category.photo} alt="" />
                                        <p className='mt-2 text-xl font-bold'>{category.partsName}</p>
                                        <p key={index} onClick={() => setProductLoading(true)} className='font-bold text-xl text-blue-600 underline my-2'>
                                            <Link to={`category/${category._id}`}>
                                                View Products <BiChevronRightCircle className='inline text-3xl'></BiChevronRightCircle>
                                            </Link>
                                        </p>
                                    </div>
                                )
                            }
                        </div>

                    </div>
            }
        </div >
    );
};

export default ProductsCategories;