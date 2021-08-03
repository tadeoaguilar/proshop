import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


const protect = expressAsyncHandler(async (req,res,next) => {
    let token 
    
   // console.log(req.headers.authorization)
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       
       try {
           token = req.headers.authorization.split(' ')[1]
           const decoded = jwt.verify(token,process.env.JWT_SECRET)
         //  console.log(decoded)

           //as it is middleware, it is assding .user to the request that can be accessed by any route , I am excluding the password
           req.user = await User.findById(decoded.id).select('-password')
           next()
       } catch (error) {
           res.status(401)
           throw new Error('Invalid token.')
       }
        
    }
    
    
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token.')
    }
    
    
  //  next()

})

const admin = (req,res,next) => {
   // console.log(req.user.isAdmin)
   // console.log(req.user)
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        res.status(401)
        throw new Error('Not authorized as Admin')
    }
}


export { protect , admin}