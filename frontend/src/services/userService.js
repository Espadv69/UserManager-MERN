import { API_URL } from '../utils/const'

/**
 * Function to add a user to the database.
 * @param {Object} userData - The user information.
 * @returns {Promise<boolean|string>} - Returns true if successful, or an error message if failed.
 */
export const addUser = async (userData) => {
  const { firstName, lastName, email, identificationNumber } = userData

  // 🛑 Validate empty fields BEFORE sending the request
  if (!firstName || !lastName || !email || !identificationNumber) {
    console.log('Validation failed: Missing fields')
    return false
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (!response.ok) throw new Error('Failed to add user')

    const data = await response.json()
    console.log('✅ User added successfully:', data)

    return true
  } catch (err) {
    console.error('❌ Error adding user:', err)
    return 'Error adding user to the database ❌'
  }
}
