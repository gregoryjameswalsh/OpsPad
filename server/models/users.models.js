// File: server/models/users.models.js
import { supabase } from '../db/supabaseClient.js'

export async function getUserFromToken(req) {
    const token = req.headers.authorization?.replace('Bearer ', '')
    const { data: {user }, error } = await supabase.auth.getUser(token)
    if (error) throw error
    return user
}

export async function getUserById(id) {
    const { data } = await supabase.from('users').select('id').eq('id', id).maybeSingle()
        return data
}

export async function createCompany(name) {
    const { data, error } = await supabase
        .from('company')
        .insert({ name })
        .select()
        .single()
    if (error) throw error
    return data
}

export async function createSite(name, companyId) {
    const { data, error } = await supabase
        .from('site')
        .insert({ name, company_id: companyId })
        .select()
        .single()
    if (error) throw error
    return data
}

export async function getRoleByName(name) {
    const { data, error } = await supabase
        .from('role')
        .select('id')
        .eq('name', name)
        .single()
    if (error) throw error
    return data
}

export async function createUser(user) {
    const { error } = await supabase.from('users').insert(user)
    if (error) throw error
}

export async function onboardUser(req, res) {
    try {
        const { name, companyName, siteName, location } = req.body

        const user = await getUserFromToken(req)
        if (!user) return res.status(401).json({ error: 'Unauthenticated' })

        // Check if user already exists
        const { data: existingUser, error: existingError } = await supabase
            .from('users')
            .select('onboarded')
            .eq('id', user.id)
            .maybeSingle()

        if (existingError) throw existingError
        if (existingUser?.onboarded) {
      return res.status(200).json({ message: 'Already onboarded' })
    }

    // Create Company
        const { data: company, error: companyError } = await supabase
      .from('companies')
      .insert({ company_name: companyName })
      .select()
      .single()
    if (companyError) throw companyError

    // Create site
    const { data: site, error: siteError } = await supabase
      .from('sites')
      .insert({ site_name: siteName, site_location: location, company_id: company.id })
      .select()
      .single()
    if (siteError) throw siteError

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

    return res.status(200).json({ message: 'Onboarding successful' })
  } catch (err) {
    console.error('[onboardUser]', err)
    return res.status(500).json({ error: err.message })
  }

}