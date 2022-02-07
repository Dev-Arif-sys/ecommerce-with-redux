import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation,Outlet } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import SignModal from '../components/SigninModal/SignModal';

const PrivateRoute = () => {
    const UserData=useSelector(state=>state.user)
    const [modalShow, setModalShow] = React.useState(true);
    const location=useLocation()

   const {loading, userInfo}=UserData
   if(loading){
       return <Loading></Loading>
   }
   
   return userInfo?.email ? <Outlet/> : <Navigate to='/' state={{from:location}} />
                 
                 
                 
        
  
};

export default PrivateRoute;