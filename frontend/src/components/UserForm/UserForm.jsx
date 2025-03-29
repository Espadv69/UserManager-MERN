import { useState, useEffect } from 'react'
import { addUser } from '../../services/userService.js'

import Form from './Form'
import './UserForm.css'

const UserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [identificationNumber, setIdentificationNumber] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // Clear the success message after 4 seconds ⏳
  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage('')
      }, 5000)

      return () => clearTimeout(timeoutId)
    }
  }, [successMessage])

  // Handle form submission 📩
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await addUser({
      firstName,
      lastName,
      email,
      identificationNumber,
    })

    if (result === true) {
      // ✅ Success
      setFirstName('')
      setLastName('')
      setEmail('')
      setIdentificationNumber('')
      setError('')
      setSuccessMessage('User added successfully! 🎉')
    } else if (result === false) {
      // ❌ Empty fields error
      setError('Please fill in all fields')
      setSuccessMessage('')
    } else {
      // ❌ API error
      setError(result)
      setSuccessMessage('')
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
        success={successMessage}
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
