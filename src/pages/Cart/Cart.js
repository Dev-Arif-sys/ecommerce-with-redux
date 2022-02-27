import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCheckout from '../../components/CartComponents/CartCheckout/CartCheckout';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import SignModal from '../../components/SigninModal/SignModal';
import getProduct from '../../Redux/Actions/ProductAction';
import './Cart.css'

const Cart = () => {
 const products=useSelector(state=>state.product.products)
 const userInfo=useSelector(state=>state.user.userInfo)
 const dispatch=useDispatch()
 const [modalShow, setModalShow] = React.useState(userInfo.email ? false : true);

    useEffect(()=>{
        dispatch(getProduct())
     },[])

    
     
   
    return (
        <div>
        <Header></Header>
        <div className='cart'>
            <CartHeader text="Your Cart"></CartHeader>
            <CartCheckout ></CartCheckout>
            <div className='mt-5 pb-5'>
                <h3 className='section-title mb-4'>Featured for you</h3>
            <ProductSlider  products={products.slice(0,20)}></ProductSlider>
            </div>
        </div>
        <Footer></Footer>
        <SignModal show={modalShow}
                    onHide={() => setModalShow(false)}
                 ></SignModal>
        </div>
    );
};

export default Cart;