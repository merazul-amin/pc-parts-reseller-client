import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/UserContext/UserContext';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const [errMsg, setErrMsg] = useState('');
    const { isLoading, error, data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () =>
            fetch(`https://server-gules-beta.vercel.app/buyers/${user?.email}`, {
                headers: { token: localStorage.getItem('token') }
            })
                .then(res => {
                    if (res.status === 403 || res.status === 401) {
                        return setErrMsg('Unauthorized Access');
                    }
                    setErrMsg('');
                    return res.json()
                })
    })

    const handleDelete = id => {
        fetch(`https://server-gules-beta.vercel.app/buyer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }
    return (
        <div>
            <h1 className='text-center my-3 text-3xl'>All Buyers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete buyer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.length > 0 && buyers.length > 0 && buyers.map((buyer, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td><button className='btn btn-error btn-sm' onClick={() => handleDelete(buyer._id)}>X</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
                <p className='text-red-500 font-bold text-center'>{errMsg && errMsg}</p>
            </div>
        </div>
    );
};

export default AllBuyers;