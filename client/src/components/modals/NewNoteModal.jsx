import { useState } from 'react';

import '../../App.css'

export default function NewNoteModal({ onSave, onClose, initialText }) {
    const [noteText, setNoteText] = useState(initialText ||'')
    const [tag, setTag] = useState('')

    const handleSave = () => {
        if (!noteText.trim() || !tag) return;
        const newNote = {
            notes: noteText.trim(),
            noteTag: tag,
            createdAt: new Date().toISOString(),
        }
        onSave(newNote);
        }

return(

    <div className="modal-overlay">
        <div className="modal-edit-note">
            <h3>New Note</h3>

            <div className="noteTag">
                <div>{noteText}</div>
                <label>Select a tag:</label> 
                <select value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="Ops">Ops</option>
                    <option value="Incident">Incident</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Staffing">Staffing</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="modal-footer">
                <button className="save-button" onClick={handleSave} disabled={!noteText.trim() || !tag}>
                    Save
                </button>
                <button className="cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    </div>
    )

}
