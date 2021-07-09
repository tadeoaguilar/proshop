import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { computeStyles } from '@popperjs/core'
import { create } from 'istanbul-reports'
import {productListReducer,productDetailsReducer} from './reducer/productReducers.js'
import {cartReducer} from './reducer/cartReducers.js'
import {userLoginReducer, userRegisterReducer,userDetailsReducer} from './reducer/userReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer
})   //Accepts an Object as a reducer

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[] 
const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null



const initialState = {

    cart: {cartItems: cartItemsFromStorage },
    userLogin : {userInfo: userInfoFromStorage}
}
const middleware= [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware))      

)
export default store