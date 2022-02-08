import React from 'react';
import './CartHeader.css'

const CartHeader = ({text}) => {
    return (
        <div className='cart-header'>
            <h1>{text}</h1>
        </div>
    );
};

export default CartHeader;