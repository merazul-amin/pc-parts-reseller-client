import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/UserContext/UserContext';

const BookingModal = ({ category, setCategory }) => {
    const { user } = useContext(AuthContext);
    const { condition, description, isVerified, location, originalPrice, phone, photoUrl, productName, purchaseDate, resalePrice, seller, sellerPhoto, used, _id, postingDate } = category;
    const handleBooking = e => {
        e.preventDefault();
        const userName = user?.displayName;
        const email = user?.email;
        const product = productName;
        const productId = _id;
        const phone = e.target.phone.value;
        const meetingLocation = e.target.location.value;
        console.log(userName, email, product, productId, phone, meetingLocation);
        toast.success('Successfully Booked This Item.');
        setCategory(null);

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

                    <h1 className='font-bold mt-3'>Phone Number</h1>
                    <input required name='phone' type="number" placeholder="Your Phone" className="input input-bordered input-warning w-full " />

                    <h1 className='font-bold mt-3'>Meeting Location</h1>
                    <input required name='location' type="text" placeholder="Location" className="input input-bordered input-warning w-full " />


                    <br />
                    <button type='submit' className='btn btn-success mt-3'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;