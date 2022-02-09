import * as actionTypes from '../ActionTypes.js/AdminActionTypes'

export const adminReducer=(state={admin:false,error:''},action)=>{
    switch(action.type){
        case actionTypes.GET_ADMIN_REQUEST:return{
            ...state
        }
        case actionTypes.GET_ADMIN_SUCCESS:return{
            ...state,
            admin:action.payload,
            error:''
        }
        case actionTypes.GET_ADMIN_FAIL:return{
            ...state,
            admin:false,
            error:action.payload
        }
    
        default : return state
        
    }
}