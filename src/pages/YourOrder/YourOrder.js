import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OrderComponent from '../../components/OrderComponent/OrderComponent';

import './YourOrder.css'

const YourOrder = () => {
   
  

    return (
        <div>
            <Header> </Header>
        <div className='your-order  '>
          <CartHeader text='Your Orders'></CartHeader>
           <OrderComponent></OrderComponent>
        </div>
         <Footer></Footer>
        </div>
    );
};

export default YourOrder;