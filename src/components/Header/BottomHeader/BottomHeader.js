import React from 'react';
import { Link } from 'react-router-dom';
import './BottomHeader.css'

const BottomHeader = () => {
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
                   <li><Link to='/' className='menu-link'>Shop</Link></li>
                   <li><Link to='/' className='menu-link'>Products</Link></li>
                   <li><Link to='/' className='menu-link'>Blog</Link></li>
                   <li><Link to='/' className='menu-link'>Elements</Link></li>
                   <li><Link to='/' className='menu-link'>Contact</Link></li>
                </ul>
                </div>
                <div className='d-flex deals'>
                    <p className='me-3'>Track Order</p>
                    <p>Daily Deals</p>
                </div>
            </div>
        </nav>
    );
};

export default BottomHeader;