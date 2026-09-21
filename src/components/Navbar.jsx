import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const { student, logout } = useApp()
  const navigate = useNavigate()

  if (!student) return null

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <span className="navbar-title">Activity Points Management System</span>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/add-activity">Add Activity</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}
