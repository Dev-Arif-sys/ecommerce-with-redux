import axios from 'axios'
import *as actionTypes from '../ActionTypes.js/AdminActionTypes'

export const getAdmin=(email)=>async (dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_ADMIN_REQUEST})
        const {data}= await axios(`http://localhost:5000/users/${email}`)
        
           console.log(data)
        dispatch({
            type:actionTypes.GET_ADMIN_SUCCESS,
            payload:data
        })
        
    }catch(error){
        dispatch({
            type:actionTypes.GET_ADMIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message :error.message
        })
    }
    
}