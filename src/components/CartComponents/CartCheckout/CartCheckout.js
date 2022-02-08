import React, { useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import './CartCheckout.css'

import { Button, FormControl, InputGroup } from 'react-bootstrap';
import CartProduct from '../CartProductReview/CartProduct';
import CartTotal from '../CartTotal/CartTotal';
import { useNavigate } from 'react-router-dom';


const CartCheckout = () => {
    const cartItem = useSelector(state => state.cart.productCart)
    const navigate=useNavigate()
 
    const clickCheckout=()=>{
         navigate('/billing')
    }
  

    return (
        <div className='d-md-flex mt-3'>
            <div className='cart-left'>
                <div className='d-md-flex justify-content-between cart-item-title'>
                    <h6 className='cart-product'>Product</h6>
                    <h6 className='cart-quantity'>quantity</h6>
                    <h6 className='cart-price'>Price</h6>
                    <h6 className='cart-remove'></h6>
                </div>
                {
                    cartItem.map(product => {
                        
                        return (
                            <>
                                <CartProduct product={product}></CartProduct>

                            </>
                        )
                    })
                }

            </div>

            <div className='cart-right px-2'>
                <div className='coupon mt-3'>
                    <p className='fw-bold'>Have Coupon?</p>
                    <InputGroup className="mb-3 w-75">
                        <FormControl
                            placeholder="Coupon code"
                          
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Apply
                        </Button>
                        
                    </InputGroup>

                </div>
                <CartTotal cartItem={cartItem} >
                <button className='gen-btn' onClick={clickCheckout}>Proceed to Checkout</button>
                </CartTotal>

               
            </div>
        </div>
    );
};

export default CartCheckout;