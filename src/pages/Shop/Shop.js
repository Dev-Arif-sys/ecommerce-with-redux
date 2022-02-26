import React from 'react';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ShopLayout from '../../components/ShopComponent/ShopLayout/ShopLayout';
import './Shop.css'

const Shop = () => {
    return (
        <div>
            <Header></Header>
        <div className='shop'>
           <CartHeader text='Shop'></CartHeader>
           <ShopLayout></ShopLayout>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Shop;