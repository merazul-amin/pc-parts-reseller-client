import React from 'react';
import { useQuery } from '@tanstack/react-query'
const ProductsCategories = () => {


    const { isLoading, error, data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/categories').then(res =>
                res.json()
            )
    })

    return (
        <div className='my-5 text-center'>
            <h1 className='text-5xl my-5 font-bold '>All Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.length > 0 && categories.map(category => <>

                        <div className="card card-compact w-[90%] bg-base-100 shadow-xl">
                            <figure><img className='h-[300px] w-full' src={category.photo} alt="/" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold my-2">{category.partsName}</h2>

                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">See All Products</button>
                                </div>
                            </div>
                        </div>

                    </>)
                }
            </div>
        </div>
    );
};

export default ProductsCategories;