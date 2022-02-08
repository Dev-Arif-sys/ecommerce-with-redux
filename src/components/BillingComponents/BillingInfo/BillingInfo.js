import React, { useEffect, useState } from 'react';
import { Form,Col,Row,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userState } from '../../../Redux/Actions/AuthAction';

const BillingInfo = ({SetOrderInfo}) => {
    const UserData=useSelector(state=>state.user.userInfo)
    const [name,setName]=useState(UserData.displayName);
    const [email,setEmail]=useState(UserData.email)
    const [address,setAddress]=useState('')
    const [HomeAddress,setHomeAddress]=useState('')
    const [phone,setPhone]=useState(0)
    const [zip,setZip]=useState(0)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(userState())
    },[])
    
    const billingInfo={
        name,
        email,
        address,
        HomeAddress,
        phone,
        zip
    }
    // SetOrderInfo(billingInfo)
 const handleFormSubmit=(e)=>{
     e.preventDefault()
     SetOrderInfo(billingInfo)
 }
    
    return (
        <div>
            <Form onSubmit={handleFormSubmit} >
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" defaultValue={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Dinajpur,Rangpur" onChange={e=>setAddress(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Home Address</Form.Label>
    <Form.Control placeholder="Apartment, Suit,Unit,Street Number" onChange={e=>setHomeAddress(e.target.value)} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Phone</Form.Label>
      <Form.Control onChange={e=>setPhone(e.target.value)} />
    </Form.Group>

   

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip/PostCode</Form.Label>
      <Form.Control onChange={e=>setZip(e.target.value)} />
    </Form.Group>
  </Row>

  
  <Button variant="primary" type="submit">
    Update
  </Button>

 
</Form>
        </div>
    );
};

export default BillingInfo;