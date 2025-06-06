import { useState, useEffect } from 'react'
import axios from 'axios'

import '../../App.css'

export default function ShiftNotesCard() {
    
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/notes`)
        if (response.status === 200) setNotes(response.data)
      
        } catch (error) {
          console.error('error', error)
        }
    }

    useEffect(() => { getNotes() }, [])

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
                  <div className="note-line" key={note.id}>
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