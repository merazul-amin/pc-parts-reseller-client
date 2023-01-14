import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import AdvertiseItems from './AdvertiseItems/AdvertiseItems';
import BottomBanner from './BottomBanner/BottomBanner';
import HomeTopBanner from './HomeTopBanner';
import InstallApp from './InstallApp/InstallApp';
import PostAds from './PostAds/PostAds';
import ProductsCategories from './ProductsCategories/ProductsCategories';
import RecentNews from './RecentNews/RecentNews';

const Home = () => {
    return (
        <div>

            <HomeTopBanner></HomeTopBanner>
            <PostAds></PostAds>
            <ProductsCategories></ProductsCategories>
            <AdvertiseItems></AdvertiseItems>
            <InstallApp></InstallApp>
            <AboutUs></AboutUs>
            <RecentNews></RecentNews>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;