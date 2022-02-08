import React from 'react';
import BillingComponet from '../../components/BillingComponents/BillingComponet';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import './Billing.css'

const Billing = () => {
    return (
        <div className='billing'>
          <CartHeader text='Your Bill'></CartHeader>
          <BillingComponet></BillingComponet>
        </div>
    );
};

export default Billing;