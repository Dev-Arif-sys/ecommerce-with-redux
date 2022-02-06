
import React from 'react';
import { ButtonGroup,Button, Modal } from 'react-bootstrap';
import Signin from '../../pages/Signin/Signin';


const SignModal = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Header>
         <Signin></Signin>
        </Modal.Header>
        
      </Modal>
    );
  
  
};

export default SignModal;