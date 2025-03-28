import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Paths
const USER_LIST = '/'
const USER_CREATE = '/create'
const EXPLANATION = '/explanation'

const App = () => {
  return (
    <Router>
      {/* Add NavBar */}
      <Routes>
        <Route path={USER_LIST} element />
      </Routes>
    </Router>
  )
}

export default App
