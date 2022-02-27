import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../../Redux/Actions/ProductAction';
import ShopCategory from '../ShopCategory/ShopCategory';
import ShopProducts from '../ShopProducts/ShopProducts';
import './ShopLayout.css'

const ShopLayout = () => {
    const productData=useSelector(state=> state.product)
    

    const dispatch=useDispatch()
  
   useEffect(()=>{
      dispatch(getProduct())
   },[])

   const {products,loading,error}=productData
   const [displayProduct,setDisplayProduct]=useState([...products])
   const [category,setCategory]=useState('all')
    console.log(category)
    
   useEffect(()=>{
       if(category=='all'){
           setDisplayProduct([...products])
       }else{
        fetch(`https://boiling-brushlands-87279.herokuapp.com/productbycategory?category=${category}`)
        .then(res=>res.json())
        .then(data=>{
            setDisplayProduct(data)
        })
       }
   
 },[category])
    return (
        <div className='shop-layout d-flex mt-4'>
            <div className='shop-left'>
                <ShopCategory products={products} setCategory={setCategory} categoryclick={category}></ShopCategory>
            </div>

            <div className='shop-right'>
               <ShopProducts products={displayProduct}></ShopProducts>
            </div>
        </div>
    );
};

export default ShopLayout;