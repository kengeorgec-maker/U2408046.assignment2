import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function ProtectedRoute({ children }) {
  const { student } = useApp()
  if (!student) {
    return <Navigate to="/login" replace />
  }
  return children
}
