import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../Redux/Actions/ProductAction';
import ProductSlider from '../ProductSlider/ProductSlider';

const OrderComponent = () => {
    const UserData=useSelector(state=>state.user.userInfo)
    const {email}=UserData
    const [orders,setOrders]=useState({})
    const productData=useSelector(state=> state.product.products)

    

     const dispatch=useDispatch()
   
    useEffect(()=>{
       dispatch(getProduct())
    },[])
    
    useEffect(()=>{
        fetch(`https://boiling-brushlands-87279.herokuapp.com/orders?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
         setOrders(data[0])

        })
    },[email])

    console.log(orders)
    return (
        <div>
            <Table  hover>
  <thead>
    <tr>
      <th></th>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    
        {
            orders?.products?.map(product=>{
                
                return(<tr>
                <td> <img src={product.img} width='50'/> </td>
                <td><p>{product?.name?.slice(0,30)}</p></td>
                <td><p>${product.price}</p></td>
                <td>{product.quantity}</td>
                </tr>)
            })
        }
      
   
    
  </tbody>
</Table>

<div className='mt-5 pb-5'>
                <h3 className='section-title mb-4'>You may also Like</h3>
            <ProductSlider  products={productData?.slice(0,15)}></ProductSlider>
            </div>
        </div>
    );
};

export default OrderComponent;