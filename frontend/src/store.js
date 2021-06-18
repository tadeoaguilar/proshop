import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { computeStyles } from '@popperjs/core'
import { create } from 'istanbul-reports'
import {productListReducer} from './reducer/productReducers.js'

const reducer = combineReducers({
    productList: productListReducer,

})   //Accepts an Object as a reducer
const initialState = {}
const middleware= [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware))      

)
export default store