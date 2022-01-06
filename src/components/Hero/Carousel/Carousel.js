import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import img1 from '../../../media/hero-slider-img/img1.png'
import img2 from '../../../media/hero-slider-img/img2.png'
import img3 from '../../../media/hero-slider-img/img3.png'
import './Carousel.css'

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
    return (
        <div className='w-75'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className='d-flex p-4  align-items-center'>
                        <div className='carousel-info'>
                            <h1>Your new Aristocracy</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$599</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <img src={img1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex p-4 align-items-center '>
                    <div className='carousel-info'>
                  <h1>Your new Aristocracy</h1>
                  <h6>under reasonable prices</h6>
                  <div className='price'>
                      <p>FROM</p>
                      <h1>$599</h1>
                  </div>
                  <button className='buying-btn'>Start buying</button>
              </div>
                        <img src={img2} />
                    </div></SwiperSlide><SwiperSlide>
                    <div className='d-flex p-4 align-items-center'>
                        <div className='carousel-info'>
                            <h1>Your new Aristocracy</h1>
                            <h6>under reasonable prices</h6>
                            <div className='price'>
                                <p>FROM</p>
                                <h1>$599</h1>
                            </div>
                            <button className='buying-btn'>Start buying</button>
                        </div>
                        <img src={img3} />

                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Carousel;