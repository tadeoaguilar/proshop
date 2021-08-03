import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { computeStyles } from '@popperjs/core'
import { create } from 'istanbul-reports'
import {productListReducer,productDetailsReducer,productDeleteReducer} from './reducer/productReducers.js'
import {cartReducer} from './reducer/cartReducers.js'
import {userLoginReducer, userRegisterReducer,userDetailsReducer,userUpdateProfileReducer,userUpdateReducer, userListReducer,userDeleteReducer} from './reducer/userReducers'
import { orderCreateReducer,orderDetailsReducer,orderListMyReducer,orderPayReducer } from './reducer/orderReducers.js'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMyList: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    productDelete: productDeleteReducer
    //shippingAddress:
})   //Accepts an Object as a reducer

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[] 
const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')? JSON.parse(localStorage.getItem('shippingAddress')):{}



const initialState = {

    cart: {cartItems: cartItemsFromStorage ,
           shippingAddress:shippingAddressFromStorage
    },
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