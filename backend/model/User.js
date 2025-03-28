import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  identificationNumber: { type: String, required: true, unique: true },
})

const USER_PATH = 'user'
const User = mongoose.model(USER_PATH, userSchema)

export default User
