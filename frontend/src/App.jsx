import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import UserListPage from './pages/UserListPage'
import AddUserPage from './pages/AddUser'

// Paths
const USER_LIST = '/'
const USER_CREATE = '/create'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={USER_LIST} element={<UserListPage />} />
        <Route path={USER_CREATE} element={<AddUserPage />} />
      </Routes>
    </Router>
  )
}

export default App
