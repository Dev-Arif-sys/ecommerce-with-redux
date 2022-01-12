import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCategory.css'

const ProductCategory = () => {
    const productData=useSelector(state=>state.product)
    const {products,loading,error}=productData
     const [selectedCat,setSelectedCat]=useState('')
     const [displayProduct,setDisplayProduct]=useState([...products.slice(1,12)])
    
    const categories=products.map((curr)=>{
        return curr.category
    })

    const uniqueCategory=categories.filter((cat,ind,arr)=> arr.indexOf(cat)===ind)
    const handleProductNav=(category)=>{
        setSelectedCat(category)
       setDisplayProduct(products.filter(product=>product.category==category))
    }
    console.log(displayProduct)
    console.log(uniqueCategory)
    return (
        <div className='mt-5'>
            
         <div className='text-center d-flex justify-content-center product-nav'>
             {
                 uniqueCategory.map(category=>  <p className={category==selectedCat && 'onActive'} onClick={()=>handleProductNav(category)} >{category.charAt(0).toUpperCase() + category.slice(1)}</p>)
             }
             
          </div>

    {
        loading ? < Loading></Loading> : error ? <h6 className='text-center'>{error}</h6> :<div className='products-container mt-2'>
        {
            displayProduct.map(product=><ProductCard key={product.key} product={product}></ProductCard>)
        }
          </div>
    }
          
      </div>
    );
};

export default ProductCategory;