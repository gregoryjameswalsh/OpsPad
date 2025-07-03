import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function PrivateRoute({ children }) {
  const { user, userProfile, loading } = useAuth()

  if (loading) return <div>Loading...</div> // or loading spinner

  if (!user) return <Navigate to="/login" />

  if (user && userProfile && userProfile.onboarded === false) {
    return <Navigate to="/onboarding" />
  }

  return children
}