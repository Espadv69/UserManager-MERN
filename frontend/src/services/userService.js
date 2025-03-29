import { API_URL } from '../utils/const.js'

/**
 * JSDoc comment for addUser function.
 * Function to add a user to the database.
 * @param {Object} userData - The user information.
 * @returns {Promise<boolean|string>} - Returns true if successful, or an error message if failed.
 */

// Add user to the database 📗
export const addUser = async (userData) => {
  const { firstName, lastName, email, identificationNumber } = userData

  // Stop if any field is empty
  if (!firstName || !lastName || !email || !identificationNumber)
    return 'Please fill in all fields'

  // Create a new user object 🆕
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    identificationNumber: identificationNumber,
  }

  // Send a POST request to the server to add the user 📬
  try {
    // Response from the server 📬
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })

    // Check if the response is ok (status code 200-299) ✅
    if (!response.ok) throw new Error('Failed to add user')

    const data = await response.json()
    console.log('User added successfully:', data)

    return true // User added successfully 👍
  } catch (err) {
    console.error('Error adding user:', err)
    return err.message
  }
}
