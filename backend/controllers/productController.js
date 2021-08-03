import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @desc: Fetch All Products
// @route: GET /api/products
// @access Public
const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc: Fetch single Products
// @route: GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async(req,res) => {
    const {params} = req
    const product = await Product.findById(params.id)
    
    if (product) {
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    } 
})


// @desc: Delete a Product
// @route: DELETE /api/products/:id
// @access PRIVATE/ADMIN
const deleteProduct = asyncHandler(async(req,res) => {
    const {params} = req
    const product = await Product.findById(params.id)
    
    if (product) {
       // console.log('Producto delete')
        await product.remove()
        res.json({message:'Product Removed'})
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    } 
})

// @desc: Delete a Product
// @route: DELETE /api/products/:id
// @access PRIVATE/ADMIN
const createProduct = asyncHandler(async(req,res) => {
    const {params} = req
    const product = await Product.findById(params.id)
    
    if (product) {
       // console.log('Producto delete')
        await product.remove()
        res.json({message:'Product Removed'})
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    } 
})

export {
    getProductById,getProducts,deleteProduct
}