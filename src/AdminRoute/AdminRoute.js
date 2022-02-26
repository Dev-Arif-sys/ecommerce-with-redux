import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route,Navigate,useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';



const AdminRoute = ({children,...rest}) => {
    const UserData=useSelector(state=>state.user)
    const admin=useSelector(state=>state.admin)
    const location=useLocation()
    const {loading, userInfo}=UserData
    if(loading){
        return <Loading></Loading>
    }
    return userInfo?.email && admin ? children :<Navigate to='/' state={{from:location}} />
    
};

export default AdminRoute;