import React from 'react';
import AdvertiseItems from './AdvertiseItems/AdvertiseItems';
import BottomBanner from './BottomBanner/BottomBanner';
import HomeTopBanner from './HomeTopBanner';
import ProductsCategories from './ProductsCategories/ProductsCategories';

const Home = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <ProductsCategories></ProductsCategories>
            <AdvertiseItems></AdvertiseItems>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;