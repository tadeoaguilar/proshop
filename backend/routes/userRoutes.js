import express from 'express'
const router = express.Router()

import { authUser , getUserProfile,registerUser,updateUserProfile} from '../controllers/userController.js'

import {protect} from '../middleware/authMiddleware.js'
// @desc: Fetch All Products
// @route: GET /api/products
// @access Public
router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)

export default router