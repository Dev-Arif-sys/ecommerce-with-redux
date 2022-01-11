import * as ActionType from '../ActionTypes.js/ProductActionTypes'

const productReducer=(state={products:[]},action)=>{
    switch(action.type){
        case ActionType.GET_PRODUCT_REQUEST:return{
            ...state,
            loading:true
        }
        case ActionType.GET_PRODUCT_SUCCESS:return{
            ...state,
            loading:false,
            products:action.payload
        }
        case ActionType.GET_PRODUCT_FAIL:return{
            ...state,
            loading:false,
            error:action.payload
        }
        default: return state
    }
    
}

export default productReducer;