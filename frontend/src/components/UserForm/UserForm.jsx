import { useState } from 'react'

import Form from './Form'
import './UserForm.css'

const API_URL = 'http://localhost:5000/api/users'

const UserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [identificationNumber, setIdentificationNumber] = useState('')
  const [error, setError] = useState('')

  // Add user to the database 📗
  const addUser = async () => {
    // Stop if any field is empty
    if (!firstName || !lastName || !email || !identificationNumber)
      return setError('Please fill in all fields')

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
      setError(err.message)
      return false // User not added successfully 👎
    }
  }

  // Handle form submission 📩
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior 🚫
    e.preventDefault()

    // Call the addUser function to add the user to the database 📥
    const success = await addUser()

    // Clear the form fields if the user was added successfully ✅
    if (success) {
      setFirstName('')
      setLastName('')
      setEmail('')
      setIdentificationNumber('')
      setError('')
    }
  }

  return (
    <section className="user-form__container">
      <header className="user-form__header">
        <h1 className="user-form__title">Add User</h1>
      </header>

      <Form
        onSubmit={handleSubmit}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        identificationNumber={identificationNumber}
        setIdentificationNumber={setIdentificationNumber}
        error={error}
      />

      <footer className="user-form__footer-container">
        <p className="user-form__footer">
          Made with ❤️ by <span className="name">Espadv69</span>
        </p>
      </footer>
    </section>
  )
}

export default UserForm
