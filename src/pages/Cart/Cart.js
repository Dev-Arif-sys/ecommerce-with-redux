import React from 'react';
import CartCheckout from '../../components/CartComponents/CartCheckout/CartCheckout';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <CartHeader></CartHeader>
            <CartCheckout></CartCheckout>
        </div>
    );
};

export default Cart;