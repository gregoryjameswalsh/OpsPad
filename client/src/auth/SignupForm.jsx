// /client/src/auth/SignupForm.jsx
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function SignupForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [site, setSite] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          company,
          site
        },
        emailRedirectTo: 'http://localhost:3000/confirm-email' // Adjust this URL as needed
      }
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess('Signup successful! Check your inbox for confirmation.')
    }
  }


  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        />

        <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        />

        <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
        />

        <input
        type="text"
        placeholder="Site Name"
        value={site}
        onChange={(e) => setSite(e.target.value)}
        required
        />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border border-gray-300 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border border-gray-300 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full py-2 bg-[#3A606E] text-white rounded hover:opacity-90"
      >
        Sign Up
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </form>
  )
}