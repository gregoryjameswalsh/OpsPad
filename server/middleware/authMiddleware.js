// File: server/middleware/authMiddleware.js

/**
 * This module provides Express middleware functions responsible for
 * authenticating and authorizing incoming HTTP requests using Supabase.
 *
 * Exports:
 *   • verifyToken(req, res, next)
 *       - Extracts the Bearer token from the Authorization header.
 *       - Validates the JWT with Supabase Auth.
 *       - Attaches the authenticated user object to req.user.
 *       - Returns 401 if no token, invalid token, or Supabase error.
 *
 * Future extensions may include:
 *   • requireRole(role)
 *       - Ensures req.user has the specified role (e.g., “admin”).
 *   • requirePermission(permission)
 *       - Checks for granular permissions in req.user.app_metadata.
 *   • Token refresh logic for rotating access/refresh tokens.
 *   • Multi-tenant guards to enforce site or company scoping.
 *   • Audit logging or rate-limiting for security hardening.
 *
 * Usage:
 *   import { verifyToken, requireRole } from './authMiddleware.js';
 *   router.get('/protected', verifyToken, (req, res) => { … });
 */

import { supabase } from '../db/supabaseClient.js'

export async function verifyToken(req, res, next) {
    try {
        const authHeader = req.get('Authorization') || '';
        const token = authHeader.startsWith('Bearer ')
            ? authHeader.slice(7)
            : null;
            
        if (!token) {
            console.warn('[Auth] No token:', req.ip); 
            return res.status(401).json({ error: 'No token provided' });
        }

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
        console.warn('[Auth] Invalid token:', req.ip, error);
        return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = data.user;


    return next();
} catch (err) {
    console.error('[Auth] Unexpected error:', err);
    return res.status(500).json({ error: 'Failed to authenticate' });
}}