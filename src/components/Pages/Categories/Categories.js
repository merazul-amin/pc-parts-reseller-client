import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const categories = useLoaderData();

    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-yellow-300'>{categories[0].categoryName}</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[90%] mx-auto'>
                {
                    categories.map(category => <SingleCategory category={category}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;