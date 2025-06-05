import '../App.css'

export default function ShiftNotesPage() {
  return (
  
          <div className="notes-section">
            <h2>Ongoing Notes</h2>
            <input className="note-input" type="text" placeholder="Add a note..." />

            <div className="note">
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