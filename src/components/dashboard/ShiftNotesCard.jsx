import { useState, useEffect } from 'react'
import axios from 'axios'

import '../../App.css'

export default function ShiftNotesCard() {
    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    

    // Fetch notes from backend
    const getNotes = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/notes`)
          if (response.status === 200) setNotes(response.data)
          } catch (error) {
          console.error('error', error)
          }
    }
    useEffect(() => { getNotes() }, [])


     // Function to open the modal, passing in the note the user has clicked 
    function openEditModal(note) {
      setSelectedNote(note)
      setIsModalOpen(note)
    }

    // Function to save the note when the user clicks "Save"
    // Currently ONLY UPDATES LOCAL STATE
    // Need to write the 'call axios.put(...)' code here before/after updating state
    // in order to persist to server / db file
    function saveNote(updatedNote) {
      setNotes((prev) => 
      prev.map((n) => (n.id === updatedNote.id ? updatedNote : n))
      )
      closeModal()
    }

    // Function to delete the note when the user clicks "Delete"
    // Currently ONLY UPDATES LOCAL STATE
    // Need to write the 'call axios.delete(...)' code here before/after updating state
    // in order to persist to server / db file
    function deleteNote(noteId) {
      setNotes((prev) => prev.filter((n) => n.id !== noteId))
      closeModal()
    }

    function closeModal() {
      setIsModalOpen(false)
      setSelectedNote(null)
    }

console.log(notes)

  return (
  
          

          <div className="notes-section">
            <h2>Ongoing Notes</h2>
            <input className="note-input" type="text" placeholder="Add a note..." />
            <button className="new-button">+</button> 

            <div className="note">
              {notes?.map((note) => {

                const dateObj = new Date(note.createdAt);
                const timeString = dateObj.toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                  
                })

                return (
                  <div className="note-line" key={note.id} onClick={() => openEditModal(note)}>
                    <span className="note-time">{timeString}</span>
                    <span className={`tag ${note.noteTag.toLowerCase()}`}>{note.noteTag}</span>
                    <span className="note-text">{note.notes}</span>
                  </div>  
                )
              })}
 
            </div>
           
          </div>
  
  );
}