import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { computeStyles } from '@popperjs/core'
import { create } from 'istanbul-reports'
import {productListReducer,productDetailsReducer} from './reducer/productReducers.js'
import {cartReducer} from './reducer/cartReducers.js'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer

})   //Accepts an Object as a reducer

const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[] 


const initialState = {

    cart: {cartItems: cartItemsFromStorage }
}
const middleware= [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware))      

)
export default store