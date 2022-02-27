import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='services text-center'>
           
            <div className='d-md-flex justify-content-around'>
            <div className='d-flex justify-content-center mb-4 align-items-start'>
                <div className='service-icon'><i className="fas fa-shipping-fast"></i></div>
                <div className='service-text'>
                    <p className='service-heading'>Free Shipping</p>
                    <p>Order $50 or more</p>
                </div>
            </div>

            <div className='d-flex  mb-4 align-items-center justify-content-center'>
                <div className='service-icon'><i className="fas fa-undo"></i></div>
                <div className='service-text'>
                    <p className='service-heading'>Free Return</p>
                    <p>Within 30 days</p>
                </div>
            </div>


            <div className='d-flex justify-content-center mb-4 align-items-start'>
                <div className='service-icon'><i className="fas fa-info"></i></div>
                <div className='service-text'>
                    <p className='service-heading'>Get 20% Off</p>
                    <p>When you sign up</p>
                </div>
            </div>



            <div className='d-flex justify-content-center mb-4 align-items-start'>
                <div className='service-icon'><i className="fas fa-life-ring"></i></div>
                <div className='service-text'>
                    <p className='service-heading'>We Support </p>
                    <p> 24/7 Amazing Services</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;