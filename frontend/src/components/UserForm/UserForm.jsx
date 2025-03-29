import { useState } from 'react'
import './UserForm.css'

const UserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [identificationNumber, setIdentificationNumber] = useState('')
  // const [error, setError] = useState('') // Todo: Add error handling
}

export default UserForm
