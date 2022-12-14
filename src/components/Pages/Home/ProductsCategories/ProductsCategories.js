import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import Spinner from '../../../SharedPages/Spinner/Spinner';
const ProductsCategories = () => {


    const { isLoading, error, data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('https://server-gules-beta.vercel.app/categories').then(res =>
                res.json()
            )
    })

    return (
        <div className='my-20 text-center'>
            <h1 className='text-5xl my-5 font-bold '>All Categories</h1>
            {
                isLoading ?
                    <Spinner></Spinner> :
                    <div className='text-center'>
                        {
                            categories.length > 0 && categories.map((category, index) =>
                                <p key={index} className='font-bold text-2xl text-blue-600 underline my-2'>
                                    <Link to={`category/${category._id}`}>{category.partsName}</Link>
                                </p>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default ProductsCategories;