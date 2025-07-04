// /client/src/auth/SignupForm.jsx
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import '../auth/auth.css'

export default function SignupForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const { data, error } = await supabase.auth.signUp({
      email,
      password,


    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess('Signup successful! Check your inbox for confirmation.')
    }
  }


  return (
    <div className="signup-container">
    <form onSubmit={handleSignup} className="signup-form">
      <h2>Create an Account</h2>
      
      {error && <p className="error-msg">{error}</p>}
      {success && <div className="success-msg">Account created! Check your inbox to confirm.</div>}

      <label>Email Address</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
      >
        Sign Up
      </button>


    </form>
    </div>
  )
}