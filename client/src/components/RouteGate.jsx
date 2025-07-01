// /components/RouteGate.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function RouteGate() {
  const { user, userProfile, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return

    if (!user) navigate('/login')
    else if (!userProfile?.onboarded) navigate('/onboarding')
    else navigate('/dashboard')
  }, [user, userProfile, loading, navigate])

  return <div>Loading...</div>
}