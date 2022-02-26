import React from 'react';
import BillingComponet from '../../components/BillingComponents/BillingComponet';
import CartHeader from '../../components/CartComponents/CartHeader/CartHeader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Billing.css'

const Billing = () => {
    return (<div>
      <Header></Header>
        <div className='billing'>
          <CartHeader text='Your Bill'></CartHeader>
          <BillingComponet></BillingComponet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Billing;