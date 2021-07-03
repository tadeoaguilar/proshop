import axios from 'axios'
import {CART_ADD_ITEM} from '../constants/cartConstants'

//getState brings all the Tree State from Redux product,productList,cart ....
export const addToCart = (id,qty) => async(dispatch,getState) =>{
    const {data} = await axios.get(`/api/products/${id}`)



    dispatch({
        type: CART_ADD_ITEM,
        payLoad: {
            product: data._id,
            name: data.name,
            image: data.price,
            countInStock: data.countInStock,
            qty
        },
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
