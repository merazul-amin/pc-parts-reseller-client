import React from 'react';
import { GoVerified } from "react-icons/go";
import { format, compareAsc } from 'date-fns'
import BookingModal from './BookingModal';
const SingleCategory = ({ category, setCategory }) => {

    const { condition, description, isVerified, location, originalPrice, phone, photoUrl, productName, pruchaseDate, resalePrice, seller, sellerPhoto, used, _id, postingDate } = category;

    const date = new Date(postingDate);


    const handleSetCategory = () => {
        setCategory(category);
    }

    return (
        <div>
            <div className="card card-compact lg:w-[70%] mx-auto bg-base-100 shadow-xl">
                <figure><img className='h-[300px] w-full' src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Location:- {location}</p>
                    <p>Resale Price:- {resalePrice}</p>
                    <p>Original Price:- {originalPrice}</p>
                    <p>Years of Used: {used}</p>
                    <p>Posted at: {format(date, 'Pp')}</p>

                    <div>
                        <h1 className='text-xl font-bold'>Sellers Info</h1>
                        <div className='flex w-[60%]  mx-auto my-3'>
                            <p className='font-bold flex'>Name:- {seller}
                                {
                                    isVerified === true && <span className='text-blue-500 text-xl ml-2'> <GoVerified></GoVerified></span>
                                }
                            </p>
                            <img className='w-10  rounded-full' src={sellerPhoto} alt="" />
                        </div>
                    </div>

                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Book Now</button> */}
                        {/* The button to open modal */}
                        <label onClick={handleSetCategory} htmlFor="bookingModal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;