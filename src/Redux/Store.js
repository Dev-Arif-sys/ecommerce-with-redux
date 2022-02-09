import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from './Reducer/ProductReducer'
import { CartReducer } from './Reducer/CartReducer'
import AuthReducer from './Reducer/AuthReducer'
import { adminReducer } from './Reducer/AdminReducer'




const reducers=combineReducers({
      product:productReducer,
      cart:CartReducer,
      user:AuthReducer,
      admin: adminReducer
})

const middleWare=[thunk]

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;