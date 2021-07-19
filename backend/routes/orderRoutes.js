import express from 'express'
const router = express.Router()

import {addOrderItems, getOrderbyId,updateOrderById} from '../controllers/orderController.js'

import {protect} from '../middleware/authMiddleware.js'



router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect,getOrderbyId)
router.route('/:id/pay').put(protect,updateOrderById)

export default router