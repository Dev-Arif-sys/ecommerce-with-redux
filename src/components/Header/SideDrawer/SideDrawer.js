import React from 'react';
import './SideDrawer.css'

const SideDrawer = ({showDrawer}) => {
    const drawerClass=['side-drawer']
      if(showDrawer){
          drawerClass.push('activeDrawer')
      }
    return (
        <div className={drawerClass.join(" ")}>
         
          
        </div>
    );
};

export default SideDrawer;