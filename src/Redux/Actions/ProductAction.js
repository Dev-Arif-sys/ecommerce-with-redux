import axios from 'axios'
import * as productAction from '../ActionTypes.js/ProductActionTypes'


const getProduct=()=>async (dispatch)=>{
    try{
        dispatch({type:productAction.GET_PRODUCT_REQUEST})
        const {data}= await axios('https://boiling-brushlands-87279.herokuapp.com/products')

        dispatch({
            type:productAction.GET_PRODUCT_SUCCESS,
            payload:data
        })
        
    }catch(error){
        dispatch({
            type:productAction.GET_PRODUCT_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message :error.message
        })
    }
    
}



export default getProduct;