import express from 'express'
const router = express.Router()

import {addOrderItems, getOrderbyId,updateOrderById,getMyOrders} from '../controllers/orderController.js'

import {protect} from '../middleware/authMiddleware.js'



router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect,getOrderbyId)
router.route('/:id/pay').put(protect,updateOrderById)
router.route('/my').get(getMyOrders)

export default router