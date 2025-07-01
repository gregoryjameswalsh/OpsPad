// /client/src/pages/OnboardingPage.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function OnboardingPage() {
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [siteName, setSiteName] = useState('')
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
        body: JSON.stringify({ name, companyName, siteName }),
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
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-6 text-[#1C1C1C]">Let’s set up your business</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Business Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Primary Site Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#3A606E] text-white rounded hover:opacity-90"
        >
          Complete Setup
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </form>
    </div>
  )
}