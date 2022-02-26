import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import './ReviewProduct.css'

const ReviewProduct = () => {
    return (
        <div>
           <Header></Header> 
        <div className='review-product'>
            <ProductDetail></ProductDetail>
        </div>
         <Footer></Footer>
        </div>
    );
};

export default ReviewProduct;