import React from 'react';

const ProductsRow = ({ product, i, refetch }) => {

    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
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

        </tr>
    );
};

export default ProductsRow;