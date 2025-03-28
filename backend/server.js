import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// dotenv config to load environment variables from .env file
dotenv.config()

// Create an Express application
const app = express()

// Middleware to parse JSON requests and enable CORS
app.use(cors())
app.use(express.json())

// MongoDB connection 🪴
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.error('MongoDB connection failed ❌', err))
