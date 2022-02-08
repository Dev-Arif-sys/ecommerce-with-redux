import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartTotal from '../CartComponents/CartTotal/CartTotal';
import BillingInfo from './BillingInfo/BillingInfo';

const BillingComponet = () => {
    const cartItem = useSelector(state => state.cart.productCart)
    const [orderInfo,SetOrderInfo]=useState({})
    const cartProduct=cartItem.map(item=>{
            return{
                id:item._id,
                name:item.name,
                img:item.img,
                quantity: item.quantity,
                price:item.price,
                key:item.key,
                status:'pending',
            }
    })

    console.log(cartProduct)
    
  
    const handlePlaceOrder=()=>{
        const orderData={
            ...orderInfo,
            products:cartProduct,        
        }

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json',

            },
            body:JSON.stringify(orderData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.insertedId){
                alert('order placed Successfully')
                // window.location.reload()
            }
        })
    }
    return (
        <div className='d-md-flex mt-3'>
        <div className='cart-left'>
           <h6>Billing Information</h6>

           <BillingInfo SetOrderInfo={SetOrderInfo}></BillingInfo>
            
          
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
            <button className='gen-btn' onClick={handlePlaceOrder} >Place Order</button>
            </CartTotal>

           
        </div>
    </div>
    );
};

export default BillingComponet;