import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const BookingModal = ({ category }) => {
    const { user } = useContext(AuthContext);
    const { condition, description, isVerified, location, originalPrice, phone, photoUrl, productName, pruchaseDate, resalePrice, seller, sellerPhoto, used, _id, postingDate } = category;
    const handleBooking = e => {
        e.preventDefault();
        console.log()
    }
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleBooking} className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Book This Product</h3>

                    <h1>User Name: {user?.displayName}</h1>
                    <h1>Email: {user?.email}</h1>
                    <h1>Product Name: {productName}</h1>


                    <br />
                    <button type='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;