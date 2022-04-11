import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../../Redux/Actions/ProductAction';
import Loading from '../../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import PriceRange from '../PriceRange/PriceRange';
import ShopCategory from '../ShopCategory/ShopCategory';
import ShopProducts from '../ShopProducts/ShopProducts';
import './ShopLayout.css';

const ShopLayout = () => {
    const productData=useSelector(state=> state.product)
    

    const dispatch=useDispatch()
  
   useEffect(()=>{
      dispatch(getProduct())
   },[dispatch])

   const {products,loading,error}=productData
   const [categorizedData,setCategorizedData]=useState([...products])
   const [displayProduct,setDisplayProduct]=useState([...products])

   const [loadingCat,setLoadingCat]=useState(false)
   const [category,setCategory]=useState('all')
   const [price,setPrice]=useState([50])
    console.log(category)
    
   useEffect(()=>{
      
       if(category=='all'){
           setDisplayProduct([...products])
           setCategorizedData([...products]) 
           setLoadingCat(false)
       }else{
           setLoadingCat(true)
        fetch(`https://boiling-brushlands-87279.herokuapp.com/productbycategory?category=${category}`)
        .then(res=>res.json())
        .then(data=>{
            setCategorizedData(data)
            setDisplayProduct(data)
            setLoadingCat(false)
        })
       }
   
 },[category])
 useEffect(()=>{
    setDisplayProduct(categorizedData.filter(data=>data.price<price[0]))
 },[price])
    return (
        <div className='shop-layout d-flex mt-4'>
            <div className='shop-left'>
                <ShopCategory products={products} setCategory={setCategory} categoryclick={category}></ShopCategory>
                <PriceRange product={categorizedData}
                value={price}
                setValue={setPrice}
                ></PriceRange>
            </div>

            <div className='shop-right'>
                
           
            {loadingCat ?  <Loading></Loading>
            :
            <div>
            <ShopProducts products={displayProduct}></ShopProducts>
            <Pagination 
            itemsPerPage={10} 
            items={categorizedData}
            setDisplayProduct={setDisplayProduct}
            ></Pagination>
            </div>
            }

               
            </div>
        </div>
    );
};

export default ShopLayout;