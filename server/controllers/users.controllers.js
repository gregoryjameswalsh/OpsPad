// File: server/controllers/users.controllers.js

import { supabase} from '../db/supabaseClient.js'
import {
    getUserFromToken,
    createCompany,
    createSite,
    createUser,
    getUserById,
    getRoleByName
} from '../models/users.models.js'

export async function onboardUser(req, res) {
  try {
    console.log('[onboardUser] Body:', req.body)

    const user = await getUserFromToken(req)
    if (!user) return res.status(401).json({ error: 'Unauthenticated' })

    console.log('[onboardUser] Authenticated user:', user.id)

    const { name, companyName, siteName, location } = req.body

    // Company
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .insert({ company_name: companyName })
      .select()
      .single()
    if (companyError) throw companyError

    console.log('[onboardUser] Created company:', company.id)

    // Site
    const { data: site, error: siteError } = await supabase
      .from('sites')
      .insert({ site_name: siteName, site_location: location, company_id: company.id })
      .select()
      .single()
    if (siteError) throw siteError

    console.log('[onboardUser] Created site:', site.id)

    // Update user
    const { error: updateError } = await supabase
      .from('users')
      .update({
        full_name: name,
        company_id: company.id,
        site_id: site.id,
        onboarded: true,
      })
      .eq('id', user.id)

    if (updateError) throw updateError

    console.log('[onboardUser] User updated')

    return res.status(200).json({ message: 'Onboarding successful' })
  } catch (err) {
    console.error('[onboardUser] Error:', err)
    return res.status(500).json({ error: err.message })
  }
}

export async function checkOnboardingStatus(req, res) {
    try {
        const user = await getUserFromToken(req)
        if (!user) return res.status(401).json({ error: 'Unauthenticated' })

            const existingUser = await getUserById(user.id)
            return res.json({ onboarded: !!existingUser })
} catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
}
}



