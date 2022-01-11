import axios from 'axios';
import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/Products/Products';
import './Home.css'

const Home = () => {
    
    return (
        <div className='home'>
            <Hero></Hero>
            <Products></Products>
            
        </div>
    );
};

export default Home;