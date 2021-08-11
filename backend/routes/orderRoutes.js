import express from 'express'
const router = express.Router()

import {addOrderItems, 
        getOrderbyId,
        updateOrderById,
        getMyOrders,
        getOrders,
        updateOrderToDelivered} from '../controllers/orderController.js'

import {protect,admin} from '../middleware/authMiddleware.js'



router.route('/').post(protect, addOrderItems)
                .get(protect,admin,getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect,getOrderbyId)
router.route('/:id/pay').put(protect,updateOrderById)
router.route('/:id/delivered').put(protect,admin,updateOrderToDelivered)
router.route('/my').get(getMyOrders)

export default router