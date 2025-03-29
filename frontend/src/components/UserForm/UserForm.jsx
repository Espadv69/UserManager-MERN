import { useState } from 'react'
import './UserForm.css'

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
  }
}

export default UserForm
