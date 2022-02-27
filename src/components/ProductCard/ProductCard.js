import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/CartAction';
import SignModal from '../SigninModal/SignModal';

import './ProductCard.css'

const ProductCard = ({product}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {name,img,price,star,_id}=product
    const [modalShow, setModalShow] = React.useState(false);
    const UserData=useSelector(state=>state.user)
    const {loading, userInfo}=UserData
   

    const handleCardClick=(id)=>{
        if(! userInfo?.email){
             setModalShow(true)
        }else{
            navigate(`products/${id}`)
        }
    
        
    }
    return (
        <div key={product.key}>
        <div  className="myCard">
         <div className="card-img">
             <div onClick={()=> handleCardClick(_id)}>
             <img src={img} alt="" />
             </div>
          
          <div className="layer"></div>
         </div>
         
         <div className="card-info">
          <div className="card-icon">
              <div className=" d-flex justify-content-between mx-2">
              <p onClick={()=>dispatch(addToCart(_id,1))} ><i className="fas fa-cart-plus"></i></p>
                       <p><i className="far fa-heart"></i></p>
              </div>
          </div>
         <div >
             
             <p className='name'>{name.slice(0,15)}...</p>
         </div>
         <div>
             <h6 className="price">${price}</h6>
         </div>
        
         </div>
         
        </div>

        <SignModal show={modalShow}
                    onHide={() => setModalShow(false)}
                 ></SignModal>
        </div>
    );
};

export default ProductCard;