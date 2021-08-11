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

// @desc: Create a Product
// @route: POST /api/products
// @access PRIVATE/ADMIN
const createProduct = asyncHandler(async(req,res) => {
 
    const product = new Product ({
        name:' ',
        price: 0,
        user: req.user._id,
        image:'/images/sample.jpg',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample Description'




    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
    
})


// @desc: Update a Product
// @route: PUT /api/products
// @access PRIVATE/ADMIN
const updateProduct = asyncHandler(async(req,res) => {
    
    const {
          name,
          price,
          description, 
          image, 
          brand, 
          category, 
          countInStock
        } = req.body.product

        const product = await Product.findById(req.params.id)
        //console.log(name)
        //console.log(req.body.product)
    if (product)
        {
          product.name = name
          product.price = price
          product.description = description
          product.image = image
          product.brand = brand
          product.category = category  
          product.countInStock = countInStock  
          const updatedProduct = await product.save()  
          res.json(updatedProduct)
        }
   
    else
    {
        res.status(404)
        throw new Error('Product not found')
    }
   
})


// @desc: Create a new review
// @route: post /api/products/:id/reviews
// @access PRIVATE
const createProductReview = asyncHandler(async(req,res) => {
    console.log(req.user)
    const {rating, comment} = req.body

        const product = await Product.findById(req.params.id)
        //console.log(name)
        //console.log(req.body.product)
    if (product)
        {
          const alreadyReviewed = product.reviews.find( r=> r.user.toString()===req.user._id.toString())
          if(alreadyReviewed){
            res.status(400)
            throw new Error('Product already reviewed')
          }
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc,item)=> item.rating +acc,0) / product.reviews.length
        await product.save()
        res.status(201).json({message:'Review Added'})
        }
   
    else
    {
        res.status(404)
        throw new Error('Product not found')
    }
   
})


export {
    getProductById,getProducts,deleteProduct,createProduct,updateProduct,createProductReview
}