import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartAction';

import './ProductCard.css'

const ProductCard = ({product}) => {
    const dispatch=useDispatch()
    const {name,img,price,star,_id}=product
    return (
        <div>
        <div className="myCard">
         <div className="card-img">
          <img src={img} alt="" />
          <div className="layer"></div>
         </div>
         
         <div className="card-info">
          <div className="card-icon">
              <div className=" d-flex justify-content-between mx-2">
              <p onClick={()=>dispatch(addToCart(_id,1))} ><i class="fas fa-cart-plus"></i></p>
                       <p><i class="far fa-heart"></i></p>
              </div>
          </div>
         <div >
             
             <p className='name'>{name}</p>
         </div>
         <div>
             <h6 className="price">${price}</h6>
         </div>
         </div>
         
        </div>
        </div>
    );
};

export default ProductCard;