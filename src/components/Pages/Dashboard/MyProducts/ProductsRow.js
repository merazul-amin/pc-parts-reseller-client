import React from 'react';

const ProductsRow = ({ product, i }) => {
    const handleAdvertise = (id) => {
        console.log(id);
        fetch(`https://server-411c60vt9-merazul-amin.vercel.app/advertise/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <tr key={i} >
            <th>{i + 1}</th>
            <td>{product.productName}</td>
            <td>{product.productPrice}</td>
            <td>{product.status}</td>
            <td>{product.status === 'available' && product.isAdvertised === false ? <button className='btn btn-sm' onClick={() => handleAdvertise(product._id)}>Advertise</button>
                :
                <p>Advertised</p>}

            </td>

        </tr>
    );
};

export default ProductsRow;