import { Link } from 'react-router-dom'
import './NavBar.css'

// Paths
const USER_LIST = '/'
const USER_CREATE = '/create'
const EXPLANATION = '/explanation'

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to={USER_LIST} className="nav-link">
        User List
      </Link>
      <Link to={USER_CREATE} className="nav-link">
        Add User
      </Link>
      <Link to={EXPLANATION} className="nav-link">
        Explanation
      </Link>
    </nav>
  )
}

export default NavBar
