import User from '../model/User.js'

// Add a new user 🟢
export const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, identificationNumber } = req.body

    // validate required fields 👮
    if (!firstName || !lastName || !email || !identificationNumber) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Check if user already exists 👮
    const existingUser = await User.findOne({ email, identificationNumber })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create a new user 😎
    const newUser = new User({
      firstName,
      lastName,
      email,
      identificationNumber,
    })
    await newUser.save()

    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser })
  } catch (err) {
    console.error('Error creating user:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Get all users 🔍
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    console.error('Error fetching users:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Delete a user by ID 🗑️
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    // Validate user ID 👮
    if (!id) {
      return res.status(400).json({ message: 'User ID is required' })
    }

    // Check if user exists 👮
    const user = await User.findByIdAndDelete(id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'User deleted successfully' })
  } catch (err) {}
}
