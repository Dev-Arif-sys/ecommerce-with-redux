import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAdmin } from '../../../Redux/Actions/AdminAction';
import { isAdmin } from '../../../Redux/Actions/AuthAction';
import SignModal from '../../SigninModal/SignModal';
import './BottomHeader.css'


const BottomHeader = () => {
    const navigate=useNavigate()
    const userInfo=useSelector(state=>state.user.userInfo)
    const [modalShow, setModalShow] = React.useState(false);
  const adminInfo=useSelector(state=>state.admin)
  const dispatch=useDispatch()
 
    useEffect(()=>{
      dispatch(getAdmin(userInfo.email))
    },[userInfo])

    const {admin}=adminInfo
    const clickYourOrder=()=>{
        if(! userInfo?.email){
            setModalShow(true)
       }else{
           navigate(`/order`)
       }

     
    
    }

    const clickDashboard=()=>{
        navigate('/dashboard')
    }
    return (
        <nav className='bottom-nav '>
            <div className='d-flex justify-content-between bottom-nav-container align-items-center '>
                <div className='d-flex align-items-center'>
                <div className='browse-category'>
              <div className='d-flex justify-content-between align-items-center'><p>Browse Categories  <i class="fas fa-chevron-down arrow-icon"></i></p></div>
              <div className='category'>
                  <p>technology</p>
                  <p>technology</p>
                  <p>technology</p>
                  <p>technology</p>
                  <p>technology</p>
                  <p>technology</p>
                  <p>technology</p>
              </div>
                </div>
                <ul className='menu-list'>
                   <li><Link to='/' className='menu-link'>Home</Link></li>
                   <li><Link to='/shop' className='menu-link'>Shop</Link></li>
                   <li><Link to='/contact' className='menu-link'>Contact</Link></li>
                </ul>
                </div>
                <div className='d-flex deals'>
                    <p className='me-2 userName'>{userInfo.displayName}</p>
                    {
                     admin.admin ? <p className='me-3' onClick={clickDashboard} style={{cursor:'pointer'}}>Dashboard</p> :  <p className='me-3' style={{cursor:'pointer'}} onClick={clickYourOrder}>Your Order</p>
                    }
                   
                    <p>Daily Deals</p>
                </div>
            </div>
                
          <SignModal show={modalShow}
                    onHide={() => setModalShow(false)}
                 ></SignModal>
        </nav>
    );
};

export default BottomHeader;