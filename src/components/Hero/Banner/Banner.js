import React from 'react';
import './Banner.css';
import img1 from '../../../media/hero-banner-img/1.jpg';
import img2 from '../../../media/hero-banner-img/2.jpg';
import img3 from '../../../media/hero-banner-img/3.jpg';

const Banner = () => {
    return (
        <div className='banner-container me-5'>
            <div className='banner' >
                <img src={img1}/>
                <div className='banner-text'>
                    <h5>Edifer Bluetooth Speaker</h5>
                    <a href='#'>Shop now</a>
                </div>

            </div>

            <div className='banner' >
                <img src={img2}/>
                <div className='banner-text'>
                    <h5>Edifer Bluetooth Speaker</h5>
                    <a href='#'>Shop now</a>
                </div>

            </div>

            <div className='banner' >
                <img src={img3}/>
                <div className='banner-text'>
                    <h5>Edifer Bluetooth Speaker</h5>
                    <a href='#'>Shop now</a>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;