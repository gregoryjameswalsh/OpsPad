import { useState } from 'react'  

import '../../App.css'
import EditNoteModal from '../modals/EditNoteModal'
import NewNoteModal from '../modals/NewNoteModal'
import NoteList from '../notes/NoteList'
import { useNotes } from '../../hooks/useNotes'


export default function ShiftNotesCard() {

    const { notes, addNote, editNote, removeNote } = useNotes()
    const [selectedNote, setSelectedNote] = useState(null)
    const [newNoteText, setNewNoteText] = useState('')
    const [newNoteInitialText, setNewNoteInitialText] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isNewNoteModalOpen, setIsNewNoteModalOpen] = useState(false)
    

     // Function to open the modal, passing in the note the user has clicked 
    const openEditModal = (note) => {
      setSelectedNote(note)
      setIsModalOpen(true)
    }

console.log(notes)

  return (

     <div className="notes-section">
        <h2>Ongoing Notes</h2>

        <input 
            className="note-input" 
            type="text" 
            placeholder="Add a note..."
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            />

          <button 
            className="new-button"
            onClick={() => {
              if (!newNoteText.trim()) return           // Don't open modal if input is empty
              setNewNoteInitialText(newNoteText.trim()) //pass the trimmed text to the modal
              setNewNoteText('')                        //clear the input field
              setIsNewNoteModalOpen(true)               //open the modal
              console.log('New Note Modal Opened')
              }}
              >+
          </button> 

          <NoteList
              notes={notes}
              onNoteClick={openEditModal}
              layout={"summary"}
          />

           {/* Conditionally render the EditNoteModal */}
           {isModalOpen && selectedNote && (
            <EditNoteModal
              note={selectedNote}
              onSave={(updatedNote) => {
                editNote(updatedNote)
                setIsModalOpen(false)
                setSelectedNote(null)
              }}
              onDelete={(id) => {
                removeNote(id)
                setIsModalOpen(false)
                setSelectedNote(null)
              }}
              onClose={() => {
                console.log('Closing edit Modal')
                setIsModalOpen(false)
                setSelectedNote(null)
              }}
            />
           )}

           {isNewNoteModalOpen && (
            <NewNoteModal
              initialText={newNoteInitialText}
              onSave={(note) => {
                console.log('closing new note modal')
                addNote(note)
                setIsNewNoteModalOpen(false)
                
              }}
              onClose={() => setIsNewNoteModalOpen(false)} 
            />
           )}
      </div>
  )
}