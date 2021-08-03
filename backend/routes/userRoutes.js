import express from 'express'
const router = express.Router()

import { authUser , getUserProfile,registerUser,updateUserProfile,getUsers, deleteUser, updateUser, getUserById} from '../controllers/userController.js'

import {protect,admin} from '../middleware/authMiddleware.js'
// @desc: Fetch All Products
// @route: GET /api/products
// @access Public
router.route('/').post(registerUser)
                 .get(protect,admin,getUsers)
router.route('/:id').delete(protect,admin,deleteUser)
                    .put(protect,admin,updateUser)
                    .get(protect,admin,getUserById)
router.route('/login').post(authUser)
router
      .route('/profile')
        .get(protect, getUserProfile)
        .put(protect,updateUserProfile)

export default router