import axios from 'axios'
import * as actionTypes from '../ActionTypes.js/CartActionType'

export const addToCart=(id,quantity)=> async(dispatch,getState)=>{
    const {data}=await axios(`http://localhost:5000/products/${id}`)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            ...data,
            quantity
        }
    }
    )

    localStorage.setItem('cart',JSON.stringify(getState().cart.productCart))

    
}


export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.productCart))
}

export const resetCart=()=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.RESET_CART
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.productCart))
}