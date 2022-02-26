import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../../Redux/Actions/ProductAction';


const ManageProducts = () => {
    const products=useSelector(state=>state.product.products)
    const dispatch=useDispatch()
    const [displayProduct,setDisplayProduct]=useState([...products])
    useEffect(()=>{
        dispatch(getProduct())
    },[])
   
    const handleDelete=(id)=>{
        if(window.confirm("are you sure to delete the product")){
            fetch(`https://boiling-brushlands-87279.herokuapp.com/products/${id}`,{
                method:'DELETE'
            }).then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    alert('deleted Successfully')
                }
            })
            const restProducts=products.filter(product=>product._id!==id)
            setDisplayProduct(restProducts)
        }
        
       
    }

    return (
        <div className='custom-container' >
        <h4 className='section-heading fw-bold text-center mt-5 mb-3'>Manage Your Products here</h4>
        <Table striped responsive hover>
<thead>
<tr>
<th>image</th>
  <th>Product Name</th>
  <th>Price</th>
  <th>Stock</th>
  <th>Delete</th>
</tr>
</thead>
<tbody>
  {
      displayProduct.map(product=>{
          return(
            <tr key={product._id}>
                <td><img src={product.img} width='50' alt="" /></td>
            <td>{product.name.slice(0,20)}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><button onClick={()=>handleDelete(product._id)} className='btn btn-warning btn-sm'>delete</button></td>
          </tr>
          )
      })
  }


</tbody>
</Table>
    </div>
    );
};

export default ManageProducts;