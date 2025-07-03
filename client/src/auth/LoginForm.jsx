// /client/src/auth/LoginForm.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [site_id, setSiteId] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()


const handleLogin = async (e) => {
  e.preventDefault()
  setError('')

  try {
    // Login with Supabase
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (loginError || !data.session) {
      setError(loginError?.message || 'Login failed')
      return
    }

    const res = await fetch('/api/profile', {
      headers: {
        Authorization: `Bearer ${data.session.access_token}`,
      }
    })
   
    const { profile } = await res.json()

    // Store UUID & Site / Company UUID in session
    sessionStorage.setItem('user_id', profile.id)
    sessionStorage.setItem('site_id', profile.site_id)

    navigate('/gate')

} catch (err) {
  console.error('Login error:', err)
  setError('Something went wrong. Please try again. ID10 T error.')
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