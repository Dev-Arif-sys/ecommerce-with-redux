import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Contact.css'
import { ButtonGroup, FloatingLabel, Form,Button } from 'react-bootstrap';

const Contact = () => {
    
    return (
        <div>
            <Header></Header>
            <div className='contact'>
            <div className="mb-5">
            <div className="contact-heading">
                <h1 className="d-flex justify-content-center align-items-center h-100 fw-bold text-white " > Contact us</h1>
            </div>
            <div>
                <h2 className="text-secondary fw-bold mt-5 text-center mb-5 ">Get in Touch</h2>

                {/* address card */}

                <div className="container d-md-flex justify-content-evenly">
                    <div className="contactCard location mb-3">
                    
                        <h5>Location</h5>
                        <div className="contactValue">
                            <p><small>249 Ung Van Khiem Street</small></p>
                            <p><small>Binh Thanh Dist, HCM City
                            </small></p>
                        </div>
                    </div>

                    {/* number card */}

                    <div className="contactCard number mb-3">
                        
                        <h5>Phone Number</h5>
                        <div className="contactValue">
                            <p><small>+88-017844-3494</small></p>
                            <p><small>+88-018344-3464</small></p>
                        </div>
                    </div>

                    {/* email card */}

                    <div className="contactCard email mb-3">
                       
                        <h5>Email</h5>
                        <div className="contactValue">
                            <p><small>financiio.contact@gmail.com</small></p>

                        </div>
                    </div>



                    {/* send us message */}

                </div>
                
                <div className=" container d-md-flex align-items-center mt-5 contact-messege">
                    
                    <div className="w-md-50 mb-4">
                    <h2 className="text-danger fw-bold" >Send us a Message</h2>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">

                            <Form.Control type="password" placeholder="Password" />
                            <FloatingLabel className="mt-3" controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </FloatingLabel>
                        <Button className="btn-danger mt-3 ">submit</Button>


                    </div>


                    {/* google map */}

                    <div className="w-md-50 ms-md-5 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.31558223855!2d-74.26055121084683!3d40.69714775950639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1633342955154!5m2!1sen!2sbd" height="450" style={{border:0,width:"100%"}}  loading="lazy"></iframe>
                    </div>


                </div>
            </div>

        </div>
            </div>
          <Footer></Footer>
        </div>
    );
};

export default Contact;