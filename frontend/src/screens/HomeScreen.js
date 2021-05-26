import React , {useEffect, useState} from 'react'      /*We define state in Functions with Hook ustState */
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


const HomeScreen = () => {
    const [products, setProducts] = useState([])
    
useEffect(()=> {      {/*  Use Effect to execute somethinbg after component is created */}
        const  fetchProducts = async () => {
            const {data} = await axios.get('/products')
            setProducts(data)
        }
        fetchProducts()
    }, [])


    
    return (
        <>
          <h1> Latest Products</h1>  
        <Row> 
            {products.map((product) =>   (
                <Col sm={12} md={6} lg={4} xl={3} >
                    <Product product = {product} />
                 </Col>
            ))}
        </Row>

        </>
    )
}

export default HomeScreen
