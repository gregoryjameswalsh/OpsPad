import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)                // Supabase auth user
  const [userProfile, setUserProfile] = useState(null)  // public.users profile
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      const currentUser = session?.user ?? null
      setUser(currentUser)

      if (currentUser) {
        const { data: profile, error: profileError } = await supabase
          .from('users')
          .select('*')
          .eq('id', currentUser.id)
          .maybeSingle()

        if (profileError) {
          console.error('Error loading user profile:', profileError)
        }

        setUserProfile(profile)
      }

      setLoading(false)
    }

    init()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])


  const refreshProfile = async () => {
  const { data: { session } } = await supabase.auth.getSession()

  const res = await fetch('/api/profile', {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  })

  if (res.ok) {
    const { profile } = await res.json()
    setUserProfile(profile)
  } else {
    console.error('Failed to fetch profile from backend')
  }
}

  return (
    <AuthContext.Provider value={{ user, userProfile, setUserProfile, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}