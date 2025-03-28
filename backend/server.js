import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// Home route
const HOME = '/'

// dotenv config to load environment variables from .env file
dotenv.config()

// Create an Express application
const app = express()

// Middleware to parse JSON requests and enable CORS
app.use(cors())
app.use(express.json())

// MongoDB connection 🪴
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('🟢 Connected to MongoDB')
  } catch (err) {
    console.error('🔴 MongoDB Connection Error:', err)
    process.exit(1)
  }
}

// Entry point
app.get(HOME, async (req, res) => {
  res.send('Welcome to the User Management API! 🟢')
})
