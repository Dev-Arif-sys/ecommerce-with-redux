import AuthenticationINIT from '../../Firebase/firebase.init.js'
import *as actionTypes from '../ActionTypes.js/AuthActionTypes'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

AuthenticationINIT()

const signInStart=()=> {
    return{
        type:actionTypes.LOGIN_REQUEST
    }
    
    }

    const signInSuccess=(user)=> {
        return  {
                type:actionTypes.LOGIN_SUCCESS,
                payload:user
            }
        
        
        }

        const signInFail=(error)=>{
            return{
                type:actionTypes.LOGIN_FAIL,
                payload:error.response && error.response.data.message ? error.response.data.message :error.message
            }
        }


const auth = getAuth()
 export const signInWithGoogle = () =>  (dispatch) => {
 
    const googleProvider = new GoogleAuthProvider()
    dispatch(signInStart())
    signInWithPopup(auth, googleProvider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
       
            dispatch(signInSuccess(user))
            
        }).catch((error) => {
            dispatch(signInFail(error))
        });
}