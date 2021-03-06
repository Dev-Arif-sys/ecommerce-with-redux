import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import AuthenticationINIT from '../../Firebase/firebase.init.js';
import * as actionTypes from '../ActionTypes.js/AuthActionTypes';


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

        const logoutType=()=>{
            return{
              type: actionTypes.LOG_OUT
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

            let user = result.user;
           saveUser(user.displayName,user.email,"PUT")
           
           
           
            dispatch(signInSuccess(user))
            
        }).catch((error) => {
            dispatch(signInFail(error))
        });
}

export const signInGithub=()=>(dispatch)=>{
    const githubProvider=new GithubAuthProvider()
      dispatch(signInStart)
    signInWithPopup(auth, githubProvider)
  .then((result) => {
    const user=result.user
    saveUser(user.displayName,user.email,"PUT")
      signInSuccess(user)
    // ...
  }).catch((error) => {
        signInFail(error)
  });
}

export const createUserWithEmailPass=(name,email,pass)=>dispatch=>{
 dispatch(signInStart())
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    
    let  user = userCredential.user;
    saveUser(name,email,"POST")
    user= {
      ...user,
      displayName:name
    }

    updateProfile(auth.currentUser, {
      displayName: name
  }).then(() => {

  }).catch((error) => {
      
  })
    
    dispatch(signInSuccess(user))
  
  })
  .catch((error) => {
    signInFail(error)
    // ..
  });
}

export const logOUt=()=>dispatch=>{
  signOut(auth).then(() => {
       dispatch(logoutType())
  }).catch((error) => {
    signInFail(error)
  });
}

export const signInWithEmailPass=(email,pass)=> dispatch=>{
  dispatch(signInStart())
  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
     
    const user = userCredential.user;
    dispatch(signInSuccess(user))

   
  })
  .catch((error) => {
    signInFail(signInFail(error))
  });
}

export const userState=()=>dispatch=>{
      dispatch(signInStart())
    onAuthStateChanged(auth, (user) => {
        if (user) {
         dispatch(signInSuccess(user))
        } else {
          // User is signed out
          // ...
        }
      });
}

let saveUser=(name,email,method)=>{
  const user={name,email}
  console.log(user)
  fetch(`https://boiling-brushlands-87279.herokuapp.com/saveuser`,{
    method:method,
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(user)

})
}

 export let isAdmin=(email)=>{
   let admin;
  fetch(`https://boiling-brushlands-87279.herokuapp.com/users/${email}`)
  .then(res=>res.json())
  .then(data=>{
   admin = data?.admin
  })


  return admin
}