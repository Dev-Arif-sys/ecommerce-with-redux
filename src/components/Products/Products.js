import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../Redux/Actions/ProductAction';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css'

const Products = () => {
    const productData=useSelector(state=> state.product)

     const dispatch=useDispatch()
   
    useEffect(()=>{
       dispatch(getProduct())
    },[])

    const {products,loading,error}=productData
    const [displayProduct,setDisplayProduct]=useState(products?.slice(0,8))
     useEffect(()=>{
         setDisplayProduct(!loading && products?.slice(0,8))
     },[products])
    console.log(displayProduct)
     const [category,setCategory]=useState('')
    const handleProductNav=(category)=>{
        setCategory(category)
        if(category=='featured'){
            setDisplayProduct(products.slice(0,8))
        }else if(category=='onsale'){
            setDisplayProduct(products.filter(product=>product.starCount<2000 && product.starCount>1500))
        }else if(category=='toprated'){
            setDisplayProduct(products.filter(product=>product.starCount>2500))
        }
    }


    return (
        <div className='mt-5'>
          <div className='text-center d-flex justify-content-center product-nav'>
              <p className={category=='featured' && 'onActive'} onClick={()=>handleProductNav('featured')} >Featured</p>
               <p className={category=='onsale' && 'onActive'}  onClick={()=>handleProductNav('onsale')} >On Sale</p>
               <p className={category=='toprated' && 'onActive'}  onClick={()=>handleProductNav('toprated')} >Top Rated</p>
          </div>

      {
          loading ? < Loading></Loading> : error ? <h6 className='text-center'>{error}</h6> :<div className='products-container mt-2'>
          {
              displayProduct?.map(product=><ProductCard key={product.key} product={product}></ProductCard>)
          }
            </div>
      }
            
        </div>
    );
};

export default Products;