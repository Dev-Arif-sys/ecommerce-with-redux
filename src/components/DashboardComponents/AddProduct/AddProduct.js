import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../../Redux/Actions/ProductAction';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const productData=useSelector(state=> state.product.products)
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getProduct()) 
    },[])

    const onSubmit = data => {
        data['key']=productData.length;
        console.log(data)
        fetch('https://boiling-brushlands-87279.herokuapp.com/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
         .then(data=>{
             console.log(data)
             if(data?.insertedId){
                 alert('prouct added successfully')
                 window.location.reload()
             }
         })
      };
    return (
        <div className='custom-container addProduct'>
        <h4 className='section-heading fw-bold'>Add a Product</h4>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>

            <input placeholder="Product Name" {...register("name")} />
            
            <input placeholder="Category" {...register("category")} />

            <input placeholder="Image Link" {...register("image")} />
            <input type='number' placeholder="Product Price" {...register("price")} />
            <textarea placeholder="product Description" {...register("description")} />





            <input className='form-btn' value='Add Product' type="submit" />
        </form>

    </div>
    );
};

export default AddProduct;