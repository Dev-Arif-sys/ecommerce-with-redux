import React from 'react';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';

const Hero = () => {
    return (
        <div className='d-flex  align-items-center'>
           < Carousel></Carousel>
           <Banner></Banner>
            
        </div>
    );
};

export default Hero;