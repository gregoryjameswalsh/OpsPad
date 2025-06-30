import supabase from '../db/supabaseClient.js'

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