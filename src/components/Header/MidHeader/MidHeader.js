import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logOUt } from '../../../Redux/Actions/AuthAction';
import SignModal from '../../SigninModal/SignModal';
import './MidHeader.css';

const MidHeader = ({click}) => {
    const cartItem=useSelector(state=>state.cart.productCart)
    const UserData=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const alert=useAlert()

    console.log(UserData)
    
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(()=>{
        if(UserData.userInfo.email){
            setModalShow(false)
            
            
        }
    },[UserData?.userInfo.email,alert])
   
    
    const cartItemCount=cartItem.reduce((quantity,item)=> cartItem.length>0? quantity+Number(item.quantity):0,0)
    
    const handleCartIconClick=()=>{
        
        navigate('/cart')
       
    }

    const handleLogout=()=>{
        dispatch(logOUt())
        alert.info('Logged out successfully')
    }
    
    return (
        <div className='mid-header' >
            <div className='mid-header-container d-flex align-items-center justify-content-between'>
                <div>
                    <h3 className='logo'> <i onClick={click} className="fas fa-bars hamburger"></i> EMARKET</h3>
                </div>
                <div>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                    </div>
                </div>
                <div>
                <span className='wish header-icon'> <i className="far fa-heart"></i>  </span>
                    <span onClick={handleCartIconClick} className='cart header-icon'> <i className="fas fa-shopping-cart"></i> <span className='cartNo'>{cartItemCount}</span> </span>

                    <p className='userNameInHead ms-2'>{UserData.userInfo?.displayName?.slice(0,10)}</p>

                    {
                        UserData.userInfo?.email ? <span onClick={handleLogout} className='ms-3 header-icon signIn'>Sign Out <i className="fas fa-sign-out-alt "></i> </span> :     <span  className='ms-3 header-icon signIn' onClick={() => setModalShow(true)} >Sign in <i className="fas fa-sign-in-alt"></i></span>
                    }
                  
                   <SignModal show={modalShow}
                    onHide={() => setModalShow(false)}
                 ></SignModal>
                </div>

            </div>

        </div>
    );
};

export default MidHeader;