import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createUserWithEmailPass, signInGithub, signInWithEmailPass, signInWithGoogle } from '../../Redux/Actions/AuthAction';
import './Signin.css';

const Signin = () => {
    const [IsRegister,SetRegister]=useState(false)
    const alert=useAlert()
    const userInfo=useSelector(state=>state.user.userInfo)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch=useDispatch()
    const onSubmit = data => {
     IsRegister?dispatch(createUserWithEmailPass(data.name,data.email,data.password)) : dispatch(signInWithEmailPass(data.email,data.password))
    
    };

    useEffect(()=>{
       if(userInfo.email){
           alert.success('logged in successfully')
       }
    },[userInfo.email])


    

  
   
    return (
        <div className='signin'>
         
            <div className='signin-container d-flex'>
                <div className='left'>
                    <h2>Login</h2>

                    <div className='mt-3'>

                    <i onClick={()=>dispatch(signInWithGoogle())} className="fab fa-google google-icon"></i>
                    <i onClick={()=>dispatch(signInGithub())} className="fab fa-github github-icon"></i>
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

                  <p className='mt-5 createAccBtn'  onClick={()=>{SetRegister(!IsRegister)}}> {
                      IsRegister? <span >Old  User? Log in</span> : <span>New User? Create account</span> 
                  }
                      </p>
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