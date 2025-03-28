import User from '../model/User'

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
  } catch (err) {}
}
