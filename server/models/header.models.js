import { supabase } from '../db/supabaseClient.js';

export async function getHeaderDetails(userId) {
  // Get user data
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('full_name, site_id')
    .eq('id', userId)
    .single();

  if (userError) throw new Error('Failed to fetch user: ' + userError.message);

  // Get site data
  const { data: site, error: siteError } = await supabase
    .from('sites')
    .select('site_name, site_location')
    .eq('id', user.site_id)
    .single();

  if (siteError) throw new Error('Failed to fetch site: ' + siteError.message);

  return {
    userName: user.full_name,
    siteName: site.site_name,
    location: site.site_location,
  };
}