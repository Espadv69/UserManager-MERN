import { Link } from 'react-router-dom'
import './NavBar.css'

// Paths
const USER_LIST = '/'
const USER_CREATE = '/create'

const NavBar = () => {
  return (
    <nav className="nav">
      <h2>UserManager 🍉</h2>
      <div className="nav-links">
        <Link to={USER_LIST} className="nav-link">
          User List
        </Link>
        <Link to={USER_CREATE} className="nav-link">
          Add User
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
