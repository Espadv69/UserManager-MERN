import { useState, useEffect } from 'react'
import { API_URL, API_USERS_ID } from '../../utils/const.js'

import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingUser, setEditingUser] = useState(null)
  const [updateFlag, setUpdateFlag] = useState(false)

  useEffect(() => {
    console.log('Editing user changed:', editingUser)
  }, [editingUser])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [updateFlag])

  // Function to handle user editing ✏️
  const handleInputChange = (e, field) => {
    setEditingUser({ ...editingUser, [field]: e.target.value })
  }

  // Function to handle user update ✏️
  const handleUpdate = async () => {
    if (!editingUser) return

    try {
      // Response to the PUT request to update the user
      const response = await fetch(API_USERS_ID(editingUser._id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingUser),
      })

      // Check if the response is ok
      if (!response.ok) throw new Error('Network response was not ok')

      // Parse the response to JSON
      const updatedUser = await response.json()
      console.log('User updated:', updatedUser)

      // Update the users in the state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUser._id ? { ...user, ...updatedUser } : user,
        ),
      )

      // Exit editing mode
      setEditingUser(null)
      setUpdateFlag((prev) => !prev) // Trigger re-render to show updated user
    } catch (err) {
      console.error('Error updating user:', err)
    }
  }

  // Function to handle user deletion 🗑️
  const handleDelete = async (id) => {
    try {
      const response = await fetch(API_USERS_ID(id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) throw new Error('Network response was not ok')

      const data = await response.json()
      console.log('User deleted:', data)

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id))
    } catch (err) {
      console.error('Error deleting user:', err)
    }
  }

  return (
    <section className="user-list__container">
      <h1 className="user-list__title">User List</h1>

      {loading ? (
        <p>
          Loading users... <span className="loader"></span>
        </p>
      ) : (
        <ul className="user-list__ul">
          {users.map((user) => (
            <li className="user-list__li" key={user._id}>
              <div className="user-list__info">
                {editingUser && editingUser._id === user._id ? (
                  <>
                    <input
                      type="text"
                      className="user-list__input"
                      value={editingUser.firstName}
                      onChange={(e) => handleInputChange(e, 'firstName')}
                    />
                    <input
                      type="text"
                      className="user-list__input"
                      value={editingUser.lastName}
                      onChange={(e) => handleInputChange(e, 'lastName')}
                    />
                    <input
                      type="email"
                      className="user-list__input"
                      value={editingUser.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                    />
                  </>
                ) : (
                  <>
                    <p className="user-list__name">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="user-list__email">{user.email}</p>
                  </>
                )}
              </div>
              <div className="user-list__actions">
                {editingUser && editingUser._id === user._id ? (
                  <button className="user-list__btn" onClick={handleUpdate}>
                    Save
                  </button>
                ) : (
                  <button
                    className="user-list__btn"
                    onClick={() => setEditingUser({ ...user })}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="user-list__btn"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UserList
