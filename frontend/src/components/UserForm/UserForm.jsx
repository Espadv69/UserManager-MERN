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

  return (
    <section className="user-form__container">
      <header className="user-form__header">
        <h1 className="user-form__title">Add User</h1>
      </header>

      <form className="user-form" onSubmit={handleSubmit}>
        <label className="user-form__label">
          FirstName
          <input
            type="text"
            className="user-form__input"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Add first name"
          />
        </label>

        <label className="user-form__label">
          LastName
          <input
            type="text"
            className="user-form__input"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Add last name"
          />
        </label>

        <label className="user-form__label">
          Email
          <input
            type="email"
            className="user-form__input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add email"
          />
        </label>

        <label className="user-form__label">
          Identification
          <input
            type="text"
            className="user-form__input"
            onChange={(e) => setIdentificationNumber(e.target.value)}
            placeholder="Add personal identification"
          />
        </label>

        <button className="user-form__button">Add User</button>
      </form>

      <footer className="user-form__footer-container">
        <p className="user-form__footer">
          Made with ❤️ by <span className="name">Espadv69</span>
        </p>
      </footer>
    </section>
  )
}

export default UserForm
