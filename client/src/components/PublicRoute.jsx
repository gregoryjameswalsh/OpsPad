// /components/PublicRoute.jsx
import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({ children }) {
  const { user, userProfile, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  // ✅ If user is onboarded, block access to public pages
  if (user && userProfile?.onboarded) {
    return <Navigate to="/dashboard" />
  }

  return children
}