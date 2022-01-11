import axios from 'axios'
import * as actionTypes from '../ActionTypes.js/CartActionType'

export const addToCart=(id,quantity)=> async(dispatch)=>{
    const {data}=await axios(`http://localhost:5000/products/${id}`)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            ...data,
            quantity
        }
    }
    )

    
}