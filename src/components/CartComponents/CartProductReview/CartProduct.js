import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../Redux/Actions/CartAction';

const CartProduct = ({product}) => {
    const dispatch = useDispatch()
    const [quantity,setQuantity]=useState(product.quantity)

   
   const handleInc=()=>{
    dispatch(addToCart(product._id,product.quantity+1))
   }

   const handleDec=()=>{
    dispatch(addToCart(product._id,product.quantity>1 && product.quantity-1))
   }

     
    
    return (
        <div className='d-md-flex justify-content-between  align-items-start mt-3 cart-item'>
        <div className='d-md-flex cart-product'>
            <img width={50} src={product.img} />
            <p className='ms-3'>{product.name.slice(0, 40)}</p>
        </div>
        <div className='cart-quantity'>
            <div className="qty-box cart-qty-box">
                <span onClick={handleDec}  className="dec qty-item" >–</span>
                <span className="qty qty-item"> {product.quantity}</span>
                <span onClick={handleInc} className="inc qty-item">+</span>
            </div>
        </div>
        <div className='cart-price'>
            <h6 className='text-warning'>${product.price}</h6>
        </div>
        <div className='cart-remove'>
            <button onClick={() => dispatch(removeFromCart(product._id))} className='btn btn-outline-warning btn-sm'> REMOVE</button>
        </div>

    </div>
    );
};

export default CartProduct;