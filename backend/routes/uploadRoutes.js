import express from 'express'
import multer from 'multer'
import path from 'path'
const router  = express.Router()
const storage = multer.diskStorage({
    destination(req,file,cb) {
        cb(null,'uploads/')

    }

    

})

