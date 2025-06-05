import { useState, useEffect } from 'react'
import axios from 'axios'

import '../App.css'

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

  return (
  
          <div className="notes-section">
            <h2>Ongoing Notes</h2>
            <input className="note-input" type="text" placeholder="Add a note..." />

            <div className="note">

              {notes?.map((task) => {
                return (
                  <div key={notes.id}>
                    <span className="tag incident">{notes.noteTag}</span>
                    <span className="note-time">{notes.createdAt}</span>
                    <span className="note-text">{notes.notes}</span>
                  </div>  
                )
              })}


              <span className="tag incident">Incident</span>
              <span className="note-time">7:32 AM</span>
              <span className="note-text">Customer complaint about slow service</span>
            </div>

            <div className="note">
              <span className="tag maintenance">Maintenance</span>
              <span className="note-time">6:58 AM</span>
              <span className="note-text">Leaking sink in kitchen</span>
            </div>

          </div>
  
  );
}