import React from 'react';
import HomeTopBanner from './HomeTopBanner';
import ProductsCategories from './ProductsCategories/ProductsCategories';

const Home = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <ProductsCategories></ProductsCategories>
        </div>
    );
};

export default Home;