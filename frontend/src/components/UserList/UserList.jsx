import { useState, useEffect } from 'react'
import { API_URL } from '../../utils/const.js'

import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

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
  }, [])

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
                <p className="user-list__name">
                  {user.firstName} {user.lastName}
                </p>
                <p className="user-list__email">{user.email}</p>
                <p className="user-list__identify">
                  {user.identificationNumber}
                </p>
              </div>
              <div className="user-list__actions">
                <button className="user-list__btn">Edit</button>
                <button className="user-list__btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UserList
