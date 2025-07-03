// /server/controllers/profile.controller.js
import { supabase } from '../db/supabaseClient.js'
import { getUserFromToken } from '../models/users.models.js'

export async function getProfile(req, res) {
  try {
    const user = await getUserFromToken(req)
    if (!user) return res.status(401).json({ error: 'Unauthenticated' })

    const { data: profile, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .maybeSingle()

    if (error) {
      console.error('[getProfile] Supabase error:', error)
      return res.status(500).json({ error: 'Error fetching profile' })
    }

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' })
    }

    return res.status(200).json({ profile })
   
  } catch (err) {
    console.error('[getProfile] Unexpected error:', err)
    return res.status(500).json({ error: err.message })
  }
}
