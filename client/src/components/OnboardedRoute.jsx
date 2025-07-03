// /components/OnboardedRoute.jsx
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function OnboardedRoute({ children }) {
  const { user, userProfile, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" />
  if (userProfile?.onboarded) return <Navigate to="/dashboard" />

  return children
}