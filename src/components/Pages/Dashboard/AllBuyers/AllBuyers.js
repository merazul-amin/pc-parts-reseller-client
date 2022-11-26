import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { isLoading, error, data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () =>
            fetch('http://localhost:5000/buyers')
                .then(res =>
                    res.json()
                )
    })
    const handleDelete = id => {
        fetch(`http://localhost:5000/buyer/${id}`, {
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
            <h1>All Buyers</h1>

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
                            buyers.length > 0 && buyers.map((buyer, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td><button className='btn btn-error' onClick={() => handleDelete(buyer._id)}>X</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;