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
            fetch(`http://localhost:5000/myProducts/${user?.email}`)
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
                        <h1>My Products</h1>


                        {products.length > 0 && <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>

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