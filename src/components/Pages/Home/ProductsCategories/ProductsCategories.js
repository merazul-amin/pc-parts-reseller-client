import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
const ProductsCategories = () => {


    const { isLoading, error, data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('https://server-411c60vt9-merazul-amin.vercel.app/categories').then(res =>
                res.json()
            )
    })

    return (
        <div className='my-5 text-center'>
            <h1 className='text-5xl my-5 font-bold '>All Categories</h1>
            <div className='text-center'>
                {
                    categories.length > 0 && categories.map((category, index) => <>
                        <p key={index} className='font-bold text-2xl text-blue-600 underline'>
                            <Link to={`category/${category._id}`}>{category.partsName}</Link>
                        </p>

                        {/* <div className="card card-compact w-[90%] bg-base-100 shadow-xl">
                            <figure><img className='h-[300px] w-full' src={category.photo} alt="/" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold my-2">{category.partsName}</h2>

                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">See All Products</button>
                                </div>
                            </div>
                        </div> */}

                    </>)
                }
            </div>
        </div>
    );
};

export default ProductsCategories;