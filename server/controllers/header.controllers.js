import { getHeaderDetails } from '../models/header.models.js';

export async function getHeaderData(req, res) {
  const userId = req.user.id;

  try {
    const headerData = await getHeaderDetails(userId);
    res.status(200).json(headerData);
  } catch (err) {
    console.error('[Header Controller] Error:', err.message);
    res.status(500).json({ error: 'Unable to fetch header data' });
  }
}