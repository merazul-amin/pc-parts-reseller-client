import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/UserContext/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const category = form.category.value;
        const productPrice = form.productPrice.value;
        const used = form.used.value;
        const buyingPrice = form.buyingPrice.value;
        const photoUrl = form.photoUrl.value;
        const dateOfPurchase = form.date.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const description = form.description.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        // console.log(productName, productPrice, photoUrl, dateOfPurchase, condition, phone, location, description, sellerEmail, sellerName, category);
        let categoryId = '';
        if (category === 'Processor') {
            categoryId = '637e4aa84600a435c1654a3f';
        }
        else if (category === 'Motherboard') {
            categoryId = '637e4aa84600a435c1654a40';
        }
        else if (category === 'Ram') {
            categoryId = '637e4aa84600a435c1654a41'
        }
        const productInfo = {
            productName,
            resalePrice: productPrice,
            originalPrice: buyingPrice,
            photoUrl,
            purchaseDate: dateOfPurchase,
            condition,
            phone,
            location,
            description,
            seller: sellerName,
            sellerEmail,
            status: 'available',
            isAdvertised: false,
            categoryId,
            isVerified: false,
            sellerPhoto: user?.photoURL,
            categoryName: category,
            postingDate: new Date(),
            used
        }
        console.log(productInfo);

        fetch('https://server-gules-beta.vercel.app/products', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('Product Added');
                navigate('/dashboard/myProducts');
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }
    return (
        <div>
            <h1 className='text-center text-4xl'>Add Product</h1>
            <form onSubmit={handleAddProduct} className='lg:w-[60%] mx-auto'>
                <p className='text-xl'>Product Name</p>
                <input required name='productName' type="text" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Select Category</p>
                <select required name='category' className="select select-primary w-full lg:w-[100%]">
                    <option selected>Processor</option>
                    <option>Motherboard</option>
                    <option>Ram</option>
                </select>



                <p className='text-xl'>Years Of Use</p>
                <input required name='used' type="text" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Asking Price</p>
                <input required name='productPrice' type="text" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Buying Price</p>
                <input required name='buyingPrice' type="text" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Product Photo Url</p>
                <input required name='photoUrl' type="text" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Date Of Purchase</p>
                <input required name='date' type="date" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Condition</p>
                <select required name='condition' className="select select-primary w-full lg:w-[100%]">
                    <option selected>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>

                <p className='text-xl'>Phone Number</p>
                <input required name='phone' type="number" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Location</p>
                <input required name='location' type="text" placeholder="Type here" className="input input-bordered input-primary w-full lg:w-[100%]" />

                <p className='text-xl'>Description</p>
                <textarea required name='description' type="text" placeholder="Type here" className="textarea textarea-primary w-full lg:w-[100%]" /> <br />

                <p className='text-right'> <button className='btn btn-success' type="submit">Submit</button></p>
            </form>
        </div>
    );
};

export default AddProduct;