import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link to ={`/product/${product._id}`}>   {/* If <a is used then refresh, better to use LINK, I can refer to this ID with Match, as in the ProductSreen Compnent*/}
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                    </Link>
                 <Card.Text as='div'> 
                    <Rating value= {product.rating} 
                            text={`${product.numReviews} reviews`}
                            >
                            
                    </Rating>
                        {product.rating} from {product.numReviews} reviews
                    
                </Card.Text>
                <Card.Text as='div'>
                    <div className = 'my-3'> 
                        ${product.price}
                    </div>
                </Card.Text>
            </Card.Body>
        
        </Card>
    )
}


export default Product
