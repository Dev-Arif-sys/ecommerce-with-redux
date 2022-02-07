import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartCheckout.css'
import { removeFromCart } from '../../../Redux/Actions/CartAction';

const CartCheckout = () => {
    const cartItem=useSelector(state=>state.cart.productCart)
    const dispatch=useDispatch()


    return (
        <div className='d-md-flex'>
           <div className='cart-left'>
             <div className='d-md-flex justify-content-between cart-item-title'>
                 <h6 className='cart-product'>Product</h6>
                 <h6 className='cart-quantity'>quantity</h6>
                 <h6 className='cart-price'>Price</h6>
                 <h6 className='cart-remove'></h6>
             </div>
             {
                 cartItem.map(product=>{
                     return(
                         <>
                        <div className='d-md-flex justify-content-between  align-items-start mt-3 cart-item'>
                        <div className='d-md-flex cart-product'>
                            <img width={50} src={product.img}/>
                            <p  className='ms-3'>{product.name.slice(0,40)}</p>
                        </div>
                        <div className='cart-quantity'>
                        <div className="qty-box cart-qty-box">
                        <span className="dec qty-item" >–</span>
                        <span className="qty qty-item"> {product.quantity}</span>
                        <span  className="inc qty-item">+</span>
                    </div>
                        </div>
                        <div className='cart-price'>
                          <h6 className='text-warning'>${product.price}</h6>
                        </div>
                        <div className='cart-remove'>
                          <button onClick={()=>dispatch(removeFromCart(product._id))} className='btn btn-outline-warning btn-sm'> REMOVE</button>
                        </div>
                        
                    </div>  
                    
                    </>
                     )
                 })
             }
             
           </div>

           <div className='cart-right'>
           <h1>hello</h1>
           </div>
        </div>
    );
};

export default CartCheckout;