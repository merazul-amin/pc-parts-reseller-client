import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/UserContext/UserContext';
import Spinner from '../../../SharedPages/Spinner/Spinner';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, error, data: orders = [] } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/bookings/${user.email}`)
                .then(res =>
                    res.json()
                )
    })
    return (
        <div>
            {
                isLoading ?
                    <Spinner></Spinner>
                    :
                    <>

                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, i) => <tr key={i}>
                                            <th><img src={order.photoUrl} className='h-[40px] border rounded-full' alt="" /></th>
                                            <td>{order.product}</td>
                                            <td>{order.resalePrice}</td>
                                            <td><button className='btn btn-success btn-xs'> Pay</button></td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>

                    </>
            }
        </div>
    );
};

export default MyOrders;