import express from 'express'
const router = express.Router()

import { getProducts,getProductById ,deleteProduct,createProduct,updateProduct} from '../controllers/productController.js'

import {protect,admin} from '../middleware/authMiddleware.js'
// @desc: Fetch All Products
// @route: GET /api/products
// @access Public

router
        .route('/')
        .get(getProducts)
        .post(protect,admin,createProduct)

// @desc: Fetch single Products
// @route: GET /api/products/:id
// @access Public

router
        .route('/:id')
        .get(getProductById)
        .delete(protect,admin,deleteProduct)
        .put(protect,admin,updateProduct)
        



export default router