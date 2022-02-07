import React,{useRef,useState} from 'react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';

SwiperCore.use([ Navigation, Pagination]);

const ProductSlider = ({products}) => {
return(
    <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          440: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
           {
              products.map(product=> <SwiperSlide> <ProductCard key={product.key} product={product}></ProductCard> </SwiperSlide>)
           }
      
      </Swiper>

    </div>
)
};

export default ProductSlider;