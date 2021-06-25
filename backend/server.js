import  express  from 'express'
import dotenv  from 'dotenv'

import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
const app =express()

dotenv.config()
connectDB()

app.use((req,res,next) => {
    console.log("Middleware example")
    console.log(req.originalUrl)
    next()
})
app.get('/',(req,res)   => {
    res.send('API is running...')

})
app.use('/api/products',productRoutes)

app.use(notFound )
app.use(errorHandler)

const PORT = process.env.PORT || 5002
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

