import axios from 'axios'

const BASE_URL = 'http://localhost:3000/notes'

export const fetchNotes = () => axios.get(BASE_URL)
export const createNote = (newNote) => axios.post(BASE_URL, newNote)
export const updateNote = (updatedNote) => axios.put(`${BASE_URL}/${updatedNote.id}`, updatedNote)
export const deleteNoteById = (id) => axios.delete(`${BASE_URL}/${id}`)