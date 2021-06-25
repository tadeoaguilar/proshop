import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button,Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import  {useDispatch,useSelector} from 'react-redux'
//import axios from 'axios'
import { listProductDetails } from '../actions/productsActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
const ProductScreen = ({history, match}) => {

    const [qty,setQty] = useState(0)
   // const [product,setProduct] = useState({})
    const dispatch = useDispatch()
    const productDetails = useSelector(state=> state.productDetails)
    console.log(productDetails)
    const {loading,error,product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
      //  const fetchProduct= async () => {
        //    const {data} = await axios.get(`api/products/${match.params.id}`)   /* data has been reconstructed by using {data} i am extratcting the data portion of res.data */
         //   setProduct(data)  /* data has been reconstructed by using {data} i am extratcting the data portion of res.data */
       // }

        //fetchProduct()


    },[dispatch,match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)   //to navigate to another route
    }
    
    return (
            <>  
            <Link className = 'btn btn-dark my-3' to='/' >
                Go Back
            </Link>
            {loading ? <Loader/> : error ? <Message variant='danger'> {error}</Message> : (
                <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item >
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <Rating value = {product.rating} color = 'red' text = {`${product.numReviews}  reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Price: {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            <Col md={3}>
                <Card>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                               {product.countInStock >0 ? 'In stock' : 'Out of stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                       
                        {product.countInStock > 0 ? (
                            <ListGroup.Item>
                                <Row>
                                    <Col> Qty </Col>
                                    <Col>   
                                        <Form.Control as ='select' value ={qty} onChange={(e)=>
                                        setQty(e.target.value)}>
                                      {[...Array(product.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}  >
                                                {x+1}

                                            </option>
                                        ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item> 



                        ):''}
                    <ListGroup.Item>
                        <Button 
                            onClick= {addToCartHandler}
                            className='btn-block' 
                            type='button' disabled = {product.countInStock === 0 }
                        > 
                            
                                Add to Cart
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
            </Row>
            ) }
            
    </>
    
    
    )
            }
export default ProductScreen
