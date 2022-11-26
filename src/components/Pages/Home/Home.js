import React from 'react';
import BottomBanner from './BottomBanner/BottomBanner';
import HomeTopBanner from './HomeTopBanner';
import ProductsCategories from './ProductsCategories/ProductsCategories';

const Home = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <ProductsCategories></ProductsCategories>

            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;