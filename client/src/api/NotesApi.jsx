import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/shift-notes'

// automatically grabs current siteId from storage
function getSiteId() {
  return sessionStorage.getItem('site_id')
}

// fetch all notes for a given site (with optional query params)
export const fetchNotesBySite = (params = {}) => {
    const siteId = getSiteId()
    console.log('Site ID: ', siteId)
    if (!siteId) throw new Error('No site ID found in session storage')
        return axios.get(`${BASE_URL}/site/${siteId}`, { params })
    
}

export const createNote = (newNote) => axios.post(BASE_URL, newNote)
export const updateNote = (updatedNote) => axios.put(`${BASE_URL}/${updatedNote.id}`, updatedNote)
export const deleteNoteById = (id) => axios.delete(`${BASE_URL}/${id}`)