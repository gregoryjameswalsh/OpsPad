import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return null // or loading spinner

  return user ? children : <Navigate to="/login" />
}