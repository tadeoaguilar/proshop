import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link } from  'react-router-dom'
import {Row,Col,ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'

import {addToCart} from '../actions/cartActions' 

//objects wrapped with Link or Router has MATCH LOCATION HISTORY
const CartScreen = ({match, location,history}) => {
    const productId =  match.params.id 
    console.log(productId)
    //parse the location string to get the ?qty=1
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(productId)

        if(productId) {
           
            dispatch(addToCart(productId,qty))
           console.log("disp")
        }


    }, [dispatch,productId,qty])

    console.log (qty)
    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
