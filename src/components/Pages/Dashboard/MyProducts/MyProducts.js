import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/UserContext/UserContext';
import Spinner from '../../../SharedPages/Spinner/Spinner';
import ProductsRow from './ProductsRow';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, error, data: products = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            fetch(`https://server-gules-beta.vercel.app/myProducts/${user?.email}`)
                .then(res =>
                    res.json()
                )
    })

    console.log(products);
    return (
        <>

            {
                isLoading ? <Spinner></Spinner>
                    :
                    <div>
                        <h1 className='text-center text-orange-400 text-4xl'>My Products</h1>
                        {
                            products.length === 0 && <p className='text-center my-5'> No Products To Show. Please Add a product first.</p>
                        }


                        {products.length > 0 && <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length > 0 && products.map((product, i) => <ProductsRow key={i} refetch={refetch} i={i} product={product}></ProductsRow>)
                                    }


                                </tbody>

                            </table>
                        </div>}
                    </div>
            }

        </>
    );
};

export default MyProducts;