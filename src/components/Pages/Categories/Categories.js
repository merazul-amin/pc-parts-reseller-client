import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const categories = useLoaderData();
    const [category, setCategory] = useState(null);

    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-yellow-300'>{categories[0].categoryName}</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[90%] my-10 mx-auto'>
                {
                    categories.map((category, i) => <SingleCategory
                        category={category}
                        key={i}
                        setCategory={setCategory}
                    ></SingleCategory>)
                }
            </div>
            {
                category && <BookingModal
                    category={category}
                    setCategory={setCategory}
                ></BookingModal>
            }


        </div>
    );
};

export default Categories;