import React from 'react';
import { toast } from 'react-toastify';

const ProductsRow = ({ product, i, refetch }) => {

    const handleAdvertise = (id) => {
        fetch(`https://server-gules-beta.vercel.app/advertise/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Advertised.')
                    refetch();
                }
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        fetch(`https://server-gules-beta.vercel.app/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Deleted This Product.')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <tr key={i} >
            <th>{i + 1}</th>
            <td>{product.productName}</td>
            <td>{product.resalePrice}</td>
            <td>{product.status}</td>
            <td>{product.status === 'available' && product.isAdvertised === false ? <button className='btn btn-sm' onClick={() => handleAdvertise(product._id)}>Advertise</button>
                :
                <p>Advertised</p>}

            </td>
            <td><button className='btn btn-error btn-sm' onClick={() => handleDelete(product._id)}>X</button></td>

        </tr>
    );
};

export default ProductsRow;