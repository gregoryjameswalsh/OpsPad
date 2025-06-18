import { useState, useEffect } from 'react'
import { fetchNotes, createNote, updateNote, deleteNoteById } from '../api/NotesApi'

export function useNotes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes().then((res) => setNotes(res.data)).catch(console.error)
    }, [])

    const addNote = async (newNote) => {
        const res = await createNote(newNote)
        setNotes((prev) => [...prev, res.data])
    }

    const editNote = async (updatedNote) => {
        await updateNote(updatedNote)
        setNotes((prev) => prev.map((n) => (n.id === updatedNote.id ? updatedNote : n)))
    }

    const removeNote = async (id) => {
        await deleteNoteById(id)
        setNotes((prev) => prev.filter((n) => n.id !== id))
    }

    return { notes, addNote, editNote, removeNote }
}
