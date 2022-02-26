import axios from 'axios';
import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Products from '../../components/Products/Products';
import './Home.css'
import img1 from '../../media/offer-banner/1.jpg'
import img2 from '../../media/offer-banner/2.jpg'
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import { signInWithGoogle } from '../../Redux/Actions/AuthAction';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SignModal from '../../components/SigninModal/SignModal';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = () => {
  
   
    
    return (
        <div>
            <Header></Header>
        <div className='home'>
            <Hero></Hero>
            <Products></Products>
            <hr className='my-4'/>
            <OfferBanner></OfferBanner>
           
            <ProductCategory></ProductCategory>
            <hr className='my-4'/>
            <Services></Services>
          
        </div>
        <Subscribe></Subscribe>
        <Footer></Footer>
        </div>
    );
};

export default Home;