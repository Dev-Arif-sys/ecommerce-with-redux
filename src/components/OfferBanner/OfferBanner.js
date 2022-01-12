import React from 'react';
import './OfferBanner.css'
import img1 from '../../media/offer-banner/1.jpg'
import img2 from '../../media/offer-banner/2.jpg'

const OfferBanner = () => {
    return (
        <div className='offer-banner-container'>
            <div className='offer-banner'>
            <img src={img1}/>
            <div className='offer-banner-text'>
                <p>Best Seller</p>
                <h6 className='banner-heading'>30% off In Kitchen & Cooking Essentials</h6>
                <button className='banner-btn'>Buy Now</button>
            </div>
            </div>

            <div className='offer-banner'>
            <img src={img2}/>
            <div className='offer-banner-text'>
                <p>Top Product</p>
                <h6 className='banner-heading'>20% off in Health Product</h6>
                <button className='banner-btn'>Buy Now</button>
            </div>
            </div>
            
        </div>
    );
};

export default OfferBanner;