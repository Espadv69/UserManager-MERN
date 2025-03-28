import express from 'express'
import { addUser, getUsers } from '../controllers/userController.js'

const API_USERS = '/api/users'
const API_USERS_ID = '/api/users/:id'

const router = express.Router()

// Route to add a new user 🟢
router.post(API_USERS, addUser)

// Route to get all users 🔍
router.get(API_USERS, getUsers)

export default router
