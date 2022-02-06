import React, { useState } from 'react';
import './Signin.css'
import { useForm } from "react-hook-form";
import { signInWithGoogle,signInGithub } from '../../Redux/Actions/AuthAction';
import { useDispatch } from 'react-redux';

const Signin = () => {
    const [IsRegister,SetRegister]=useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch=useDispatch()
    const onSubmit = data => console.log(data);


    console.log(IsRegister)

  
   
    return (
        <div className='signin'>
         
            <div className='signin-container d-flex'>
                <div className='left'>
                    <h2>Login</h2>

                    <div className='mt-3'>

                    <i onClick={()=>dispatch(signInWithGoogle())} class="fab fa-google google-icon"></i>
                    <i onClick={()=>dispatch(signInGithub())} class="fab fa-github github-icon"></i>
                    </div>

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>

                   {
                       IsRegister && <input className='signin-input' placeholder='Name'{...register("name")} />
                   } 
     
                <input className='signin-input' placeholder='Email'{...register("email")} />
                <br/>
                <input placeholder='Password' className='signin-input'  type='password' {...register("password")} />
                <br/>

 
                  <input className='submit-btn' type="submit"  />

                  <p className='mt-5 createAccBtn'  onClick={()=>{SetRegister(!IsRegister)}}>New User? Create account</p>
    </form>


                </div>
                <div className='right'>
               <h3>Welcome to Emarket</h3>
              
                </div>
            </div>
        </div>
    );
};

export default Signin;