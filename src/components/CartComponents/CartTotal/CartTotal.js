import React from 'react';
import './CartTotal.css';

const CartTotal = ({cartItem,children}) => {
    const totalPrice=cartItem.reduce((total,current)=> total + current.price *current.quantity,0)
    return (
        <div>
             <div className='cart-total'>
                    <p>Total Price: <span className='price'>{totalPrice.toFixed(2)}</span></p>
                    <p>Discount: <span className='price'>300</span></p>
                    <p>Total: <span className='price'>{totalPrice.toFixed(2)}</span></p>
                    {children}
                </div>
        </div>
    );
};

export default CartTotal;