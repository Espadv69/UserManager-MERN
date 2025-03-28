import User from '../model/User'

// Add a new user 🟢
export const addUser = async (req, res) => {
  try {
    const { firstName, lastName, email, identificationNumber } = req.body

    // validate required fields 👮
    if (!firstName || !lastName || !email || !identificationNumber) {
      return res.status(400).json({ message: 'All fields are required' })
    }
  } catch (err) {}
}
