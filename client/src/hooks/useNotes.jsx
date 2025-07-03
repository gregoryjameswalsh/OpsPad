import { useState, useEffect, useCallback } from 'react'
import { fetchNotesBySite, createNote, updateNote, deleteNoteById } from '../api/NotesApi'

const API = import.meta.env.VITE_API_BASE

export function useShiftNotes( { fromDate, toDate, limit, offset } = {}) {
    const [notes, setNotes] = useState([])

    const siteId = sessionStorage.getItem('site_id');
    const userId = sessionStorage.getItem('user_id'); 

    const fetchNotes = useCallback(() => {
    if (!siteId) return Promise.resolve();

    return fetch(`${API}/api/shift-notes/site/${siteId}`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load notes (${res.status})`);
        return res.json();
      })
      .then(data => setNotes(data))
      .catch(err => {
        console.error('[useShiftNotes] fetchNotes error', err);
        setNotes([]);
      });
  }, [siteId]);
  
    useEffect(() => {
        fetchNotes()   
    }, [fetchNotes])

// **!!****!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***
// This needs refactoring as currently old json pulling code    
    const addNote = async (noteData) => {
        const payload = { ...noteData, siteId, userId }
        console.log('[useShiftNotes] POST /api/shift-notes →', payload)

        const res = await fetch(`${API}/api/shift-notes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        if (!res.ok) {
            const text = await res.text()
            console.error('[useShiftNotes] addNote failed:', res.status, text)
            throw new Error(`Failed to add note (${res.status})`)
        }
        const created = await res.json()
        //prepend to state so newest is on top
        setNotes(ns => [created, ...ns])
        return created
    }
// End of code needing refactoring
// **!!****!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***!!***


  const editNote = (note) => {
    return fetch(`${API}/api/shift-notes/${note.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then(res => res.json())
      .then(updated => setNotes(ns => ns.map(n => n.id === updated.id ? updated : n)))
  }

  const setAsDeleted = (id) => 
    fetch(`${API}/api/shift-notes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_deleted: true}),
    })
      .then(res => {
        if (!res.ok) throw new Error(`Soft‐delete failed (${res.status})`);
        return res.json();
  })
      .then(() => fetchNotes())

  // This actually deletes the note, which is not what we want here
  // We want to only set the note as 'is_deleted' for auditing purposes
  // Leaving this here for reference only
      const removeNote = (id) => {
        return fetch(`${API}/api/shift-notes/${id}`, { method: 'DELETE' })
        .then(() => setNotes(ns => ns.filter(n => n.id !== id)))
    }
  // END OF DELETED NOTE CODE


    console.log(notes)

    return { notes, addNote, editNote, setAsDeleted, removeNote }
}
