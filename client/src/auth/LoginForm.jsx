// /client/src/auth/LoginForm.jsx
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Log In</h2>
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
        Log In
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  )
}