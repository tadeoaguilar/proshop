import {CART_ADD_ITEM} from '../constants/cartConstants'

export const cartReducer = (state = {cartItems:[]},action)=>{
    switch(action.type){

        case CART_ADD_ITEM:
            const item = action.payload
            console.log('debug1')
            console.log(state)  

           {/* const existItem= state.cartItems.find(x =>  x.product?x.product:'' === item.product) */}
           const existItem = false
            if (existItem){
                return {
                    ...state,cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x )
                }
            }
            else
            {
                  console.log( ...state,cartItems:[...state.cartItems,item]    )  
                    return{

                    ...state,cartItems:[...state.cartItems,item]    
                    }
            }

        default:
                return state
    }

}