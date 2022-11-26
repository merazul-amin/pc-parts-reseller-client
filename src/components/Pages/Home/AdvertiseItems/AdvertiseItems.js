import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../SharedPages/Spinner/Spinner';

const AdvertiseItems = () => {
    const { isLoading, error, data: products = [] } = useQuery({
        queryKey: ['advertised'],
        queryFn: () =>
            fetch('https://server-gules-beta.vercel.app/advertised').then(res =>
                res.json()
            )
    })
    return (
        <>
            {
                isLoading ?
                    <Spinner></Spinner>
                    :
                    <div className='w-[95%] mx-auto'>
                        {
                            products.length > 0 && <div className='my-16'>
                                <h1 className='text-center text-orange-500 text-4xl font-bold my-5'>Advertised Products</h1>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {
                                        products.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">
                                            <figure><img src={product.photoUrl} alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{product.productName}</h2>
                                                <p>Seller: {product.seller}</p>
                                                <div className="card-actions justify-end">
                                                    <button className="btn btn-primary">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>

                            </div>
                        }
                    </div>
            }
        </>
    );
};

export default AdvertiseItems;