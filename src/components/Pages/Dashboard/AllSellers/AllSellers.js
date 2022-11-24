import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { isLoading, error, data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () =>
            fetch('http://localhost:5000/sellers')
                .then(res =>
                    res.json()
                )
    })
    const handleDelete = id => {
        fetch(`http://localhost:5000/seller/${id}`, {
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
            <h1>All Sellers</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete Seller</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers.length > 0 && sellers.map((seller, i) => <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{seller?.name}</td>
                                    <td>{seller?.email}</td>
                                    <td><button className='btn btn-error' onClick={() => handleDelete(seller._id)}>X</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;