import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCheckout from '../../components/CartComponents/CartCheckout/CartCheckout';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import getProduct from '../../Redux/Actions/ProductAction';
import './Cart.css'

const Cart = () => {
 const products=useSelector(state=>state.product.products)
 const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProduct())
     },[])
     console.log(products)
   
    return (
        <div className='cart'>
            <CartHeader text="Your Cart"></CartHeader>
            <CartCheckout ></CartCheckout>
            <div className='mt-5 pb-5'>
                <h3 className='section-title mb-4'>Featured for you</h3>
            <ProductSlider  products={products.slice(0,20)}></ProductSlider>
            </div>
        </div>
    );
};

export default Cart;