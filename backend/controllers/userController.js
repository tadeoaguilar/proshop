import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc: Register a new user
// @route: POST /api/users
// @access Public
const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body //it requires middleware to read body 
            //set postman to POST, BODY RAW and check that JSON is selected and not text
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error ('Invalid user data.')
    }

})

// @desc: Auth user and get token
// @route: GET /api/users/login
// @access Public
const authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body //it requires middleware to read body 
            //set postman to POST, BODY RAW and check that JSON is selected and not text



    const user = await User.findOne({email})
    if (user && (await user.matchPassword(password))){
        console.log('test')
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)

        })    
    }else{
        res.status(401)
        throw new Error('Invalid email or password')

    }

    
})


// @desc: Auth user and get token
// @route: GET /api/users/login
// @access Public
const getUserProfile = asyncHandler(async(req,res) => {

    //user is available in the REQ because of middleware implemented in the route
    const user = await User.findById(req.user._id)
    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
          

        })
    }
    else
    {
        res.status(404)
        throw new Error('user not found')
    }

    
    
})


export {authUser,getUserProfile,registerUser}