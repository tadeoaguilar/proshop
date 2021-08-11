import React , {useEffect} from 'react'      /*We define state in Functions with Hook ustState */
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productsActions.js'


//import axios from 'axios'
   // comentado para usar REDUX

const HomeScreen = () => {
   // const [products, setProducts] = useState([])
    const dispatch= useDispatch()
    const productList = useSelector((state) => {
   // console.log(state)
      return  state.productList 
    }) 
       // productList es el mismo nombre de mi store 
    const {loading,error,products} = productList
useEffect(()=> {      
    /*  Use Effect to execute somethinbg after component is created */
        // const  fetchProducts = async () => {
        //     console.log(1)
        //     const {data} = await axios.get('/products/')
        //     setProducts(data)
        // }
        // fetchProducts()
        // comentado para usar REDUX
        dispatch(listProducts())
    }, [dispatch])


    
    return (
        <>
          <h1> Latest Products</h1>  
          {loading ? (<Loader/>) : error? <Message variant='danger'   > {error} </Message> : ( <Row> 
            {products.map((product) =>   (
                <Col sm={12} md={6} lg={4} xl={3} >
                    <Product product = {product} />
                 </Col>  
        
            ))}
        </Row>)}

        </>
    )
}

export default HomeScreen
