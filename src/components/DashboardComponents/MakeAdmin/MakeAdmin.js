import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const [success,setSuccess]=useState(false)
    const [email,setEmail]=useState({})

    const onSubmit = data => {
       

        setEmail(data)
        fetch('https://boiling-brushlands-87279.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{ 'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
               setSuccess(true)
               reset()
            }
        })
    }
    return (
        <div className='custom-container'>
            <h4 className='section-heading fw-bold text-center'>Add a Product</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <input placeholder="Enter the email" {...register("email")} />

              





                <input className='form-btn' value='Make Admin' type="submit" />
            </form>
            {
                           success &&   <Alert  variant='danger'>
                           you made {email.email} an admin.
                         </Alert>
                       }
        </div>
    );
};

export default MakeAdmin;