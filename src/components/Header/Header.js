import React, { useState } from 'react';
import BottomHeader from './BottomHeader/BottomHeader';
import MidHeader from './MidHeader/MidHeader';
import './Header.css'
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './Backdrop/BackDrop';

const Header = () => {
    const [showDrawer,setShowDrawer]=useState(false)
    return (
        <div>
            <MidHeader click={()=>setShowDrawer(true)}></MidHeader>
            <hr className='hr'/>
    <BottomHeader></BottomHeader>
    <SideDrawer showDrawer={showDrawer}></SideDrawer>
    <BackDrop click={()=>setShowDrawer(false)} showBack={showDrawer}></BackDrop>
    {
        showDrawer &&  <div onClick={()=> setShowDrawer(false)} className='cross-btn'> <i className="fas fa-times"></i> </div>
    }
   
        </div>
    );
};

export default Header;