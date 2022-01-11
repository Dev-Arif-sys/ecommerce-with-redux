import * as actionTypes from '../ActionTypes.js/CartActionType'

 export const CartReducer=(state={productCart:[]},action)=>{
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
      default: return state
    }
}