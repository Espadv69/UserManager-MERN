import { useState } from 'react'
import './UserForm.css'

const API_URL = 'http://localhost:5000/api/users'

const UserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [identificationNumber, setIdentificationNumber] = useState('')
  // const [error, setError] = useState('') // Todo: Add error handling

  // Add user to the database 📗
  const addUser = async () => {
    // Todo: Add error handling
    // Stop if any field is empty
    if (!firstName || !lastName || !email || !identificationNumber) return

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

      // Clear the form fields after successful submission 🧼
      setFirstName('')
      setLastName('')
      setEmail('')
      setIdentificationNumber('')
    } catch (err) {
      console.error('Error adding user:', err)
      // setError(err.message) // Todo: Add error handling
    }
  }

  // Handle form submission 📩
  const handleSubmit = (e) => {
    // Prevent default form submission behavior 🚫
    e.preventDefault()

    // Call the addUser function to add the user to the database 📗
    addUser()
  }
}

export default UserForm
