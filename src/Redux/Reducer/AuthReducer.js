import * as actionTypes from '../ActionTypes.js/AuthActionTypes'
const initialState={
    loading:false,
    userInfo:{},
    error:''
}
export const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOGIN_REQUEST:return{
            ...state,
            loading:true
        }
        case actionTypes.LOGIN_SUCCESS:return{
            ...state,
            loading:false,
            userInfo:action.payload,
            error:''
        }
        case actionTypes.LOGIN_FAIL:return{
            ...state,
            loading:false,
            error:action.payload
        }
        case actionTypes.LOG_OUT:return{
            loading:false,
             userInfo:{},
               error:''
        }
        default : return state
        
    }
}

export default AuthReducer;