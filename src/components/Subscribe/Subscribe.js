import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div>
              <div class="overlap">
     <div class="card__footer">
       <h2 className='fw-bold text-white'>
        Get 20% Discount for Subscriber</h2>
        
        <div class="card__footer">
          <input type="email" placeholder="examle@gmail.com" />
          <button className='subscribe-btn'>  Subscribe</button>
        </div>
     </div>
      </div>
   </div>
        
    );
};

export default Subscribe;