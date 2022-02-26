import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOUt } from '../../../Redux/Actions/AuthAction';
import SignModal from '../../SigninModal/SignModal';
import './SideDrawer.css'

const SideDrawer = ({showDrawer}) => {
    const drawerClass=['side-drawer']
    const adminInfo=useSelector(state=>state.admin)
    const {admin}=adminInfo
    const [modalShow, setModalShow] = React.useState(false);
    const userInfo=useSelector(state=>state.user.userInfo)
    const navigate=useNavigate()
    const dispatch=useDispatch()

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

      if(showDrawer){
          drawerClass.push('activeDrawer')
      }
    return (
        <div className={drawerClass.join(" ")}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <ul className='drawer-link-list'>
            <li><Link to='/' className='menu-link mb-3 fs-4 fw-bold'>Home</Link></li>
                   <li><Link to='/shop' className='menu-link mb-3 fs-4 fw-bold'>Shop</Link></li>
                   <li><Link to='/contact' className='menu-link mb-3 fs-4 fw-bold'>Contact</Link></li>
           
                  
                        
                   {
                     admin.admin ?<li><p className=' mb-3 fs-4 fw-bold text-black' onClick={clickDashboard} style={{cursor:'pointer'}}>Dashboard</p> </li>  : <li> <p className=' text-black  fs-4 fw-bold' style={{cursor:'pointer'}} onClick={clickYourOrder}>Your Order</p></li>
                    }
                     
                     {
                         userInfo?.email ? <li><Link to='/' onClick={()=>dispatch(logOUt())} className='menu-link mb-3 fs-4 fw-bold'>Log Out</Link></li> :
                         <li><Link to='/' className='menu-link mb-3 fs-4 fw-bold' onClick={() => setModalShow(true)}>Log In</Link></li>
                     }
                     
                     

                    
                    
            </ul>
            </div>
   
            <SignModal show={modalShow}
                    onHide={() => setModalShow(false)}
                 ></SignModal>
        </div>
    );
};

export default SideDrawer;