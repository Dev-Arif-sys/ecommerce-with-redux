import * as actionTypes from '../ActionTypes.js/CartActionType'


const InitialCart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ):[]


 export const CartReducer=(state={productCart:InitialCart},action)=>{
    switch(action.type){
      case actionTypes.ADD_TO_CART:{
          const item=action.payload

          const existItem=state.productCart.find(product=> item._id===product._id)
          if(existItem){
              return ({
                  ...state,
                  productCart:state.productCart.map(product=>product._id==existItem._id ?item: product )
              })
          }else{
              return{
                  ...state,
                  productCart:[...state.productCart,item]
              }
          }

      }
      case actionTypes.REMOVE_FROM_CART:{
          const restItem=state.productCart.filter(product=>product._id !== action.payload)
          return{
            ...state,
            productCart:restItem
        }
      }

      case actionTypes.RESET_CART:{
          return{
              ...state,
              productCart:[]
          }
      }
      
      default: return state
    }
}