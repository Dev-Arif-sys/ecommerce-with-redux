import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div>
              <div className="overlap">
     <div className="card__footer">
       <h2 className='fw-bold text-white'>
        Get 20% Discount for Subscriber</h2>
        
        <div className="card__footer">
          <input type="email" placeholder="examle@gmail.com" />
          <button className='subscribe-btn'>  Subscribe</button>
        </div>
     </div>
      </div>
   </div>
        
    );
};

export default Subscribe;