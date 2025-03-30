import express from 'express'
import {
  addUser,
  getUsers,
  deleteUser,
  updateUser,
} from '../controllers/userController.js'

const API_USERS = '/users'
const API_USERS_ID = '/users/:id'

const router = express.Router()

// Route to add a new user 🟢
router.post(API_USERS, addUser)

// Route to get all users 🔍
router.get(API_USERS, getUsers)

// Route to update a user by ID ✏️
router.put(API_USERS_ID, updateUser)

// Route to delete a user by ID 🗑️
router.delete(API_USERS_ID, deleteUser)

export default router
