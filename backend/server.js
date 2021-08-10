import  express  from 'express'
import dotenv  from 'dotenv'
import path from 'path'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import uploadRoutes from './routes/uploadRoutes.js'
const app =express()

dotenv.config()
connectDB()
app.use(express.json()) //to read JSON from body
app.use((req,res,next) => {
   // console.log("Middleware example")
    console.log(req.originalUrl)
    console.log(req.method)
    next()
})
app.get('/',(req,res)   => {
    res.send('API is running...')

})
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/config/paypal', (req,res) =>{
    res.json(process.env.PAYPAL_CLIENT_ID)
} )
app.use('/api/upload',uploadRoutes)
//to make image upload folder statis and accessible 
const __dirname= path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
app.use(notFound )
app.use(errorHandler)

const PORT = process.env.PORT || 5002
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

