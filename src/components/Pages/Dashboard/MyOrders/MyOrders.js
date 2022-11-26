import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/UserContext/UserContext';
import Spinner from '../../../SharedPages/Spinner/Spinner';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [errMsg, setErrMsg] = useState('');
    const { isLoading, error, data: orders = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: () =>
            fetch(`http://localhost:5000/bookings/${user.email}`, {
                headers: { token: localStorage.getItem('token') }
            })
                .then(res => {
                    if (res.status === 403 || res.status === 401) {
                        return setErrMsg('Unauthorized Access');
                    }
                    setErrMsg('');
                    return res.json()
                }
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
                                        orders.length > 0 && orders.map((order, i) => <tr key={i}>
                                            <th><img src={order.photoUrl} className='h-[40px] border rounded-full' alt="" /></th>
                                            <td>{order.product}</td>
                                            <td>{order.resalePrice}</td>
                                            <td><button className='btn btn-success btn-xs'> Pay</button></td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>

                        <p className='text-red-500 text-center font-bold'>{errMsg && errMsg}</p>

                    </>
            }
        </div>
    );
};

export default MyOrders;