import axios from 'axios';
import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Products from '../../components/Products/Products';
import './Home.css'
import img1 from '../../media/offer-banner/1.jpg'
import img2 from '../../media/offer-banner/2.jpg'
import ProductCategory from '../../components/ProductCategory/ProductCategory';

const Home = () => {
    
    return (
        <div className='home'>
            <Hero></Hero>
            <Products></Products>
            <hr className='my-4'/>
            <OfferBanner></OfferBanner>
            <ProductCategory></ProductCategory>
            
        </div>
    );
};

export default Home;