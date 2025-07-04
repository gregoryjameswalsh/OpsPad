// /client/src/pages/OnboardingPage.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import '../auth/auth.css'

export default function OnboardingPage() {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [siteName, setSiteName] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        setError('You must be logged in to complete onboarding.')
        return
      }

      const res = await fetch('/api/onboard-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ name, companyName, siteName, location }),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || 'Onboarding failed')
        return
      }

      // Success — go to dashboard
      navigate('/dashboard')
    } catch (err) {
      console.error('Onboarding error:', err)
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="signup-container">
     
      <form onSubmit={handleSubmit} className="signup-form">
         <h2>Let’s set up your business</h2>
         <label>Full Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Business Name</label>
        <input
          type="text"
          placeholder="Business Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <label>Site or Outlet Name</label>
        <input
          type="text"
          placeholder="Primary Site Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          required
        />
        <label>Location</label>
        <input
          type="text"
          placeholder="Location of site"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          type="submit"
          
        >
          Complete Setup
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </form>
    </div>
  )
}