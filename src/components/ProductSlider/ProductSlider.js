import React,{useRef,useState} from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';

SwiperCore.use([Virtual, Navigation, Pagination]);

const ProductSlider = ({products}) => {
return(
    <div>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
            type: 'fraction',
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
           {
              products.map(product=><ProductCard key={product.key} product={product}></ProductCard>)
           }
      
      </Swiper>

    </div>
)
};

export default ProductSlider;