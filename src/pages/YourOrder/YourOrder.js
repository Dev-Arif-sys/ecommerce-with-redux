import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import OrderComponent from '../../components/OrderComponent/OrderComponent';

import './YourOrder.css'

const YourOrder = () => {
   
  

    return (
        <div className='your-order  '>
          <CartHeader text='Your Orders'></CartHeader>
           <OrderComponent></OrderComponent>
        </div>
    );
};

export default YourOrder;