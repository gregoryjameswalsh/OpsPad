import { useState } from 'react';

import '../../App.css'

export default function NewTaskModal({ onSave, onClose, initialText }) {
    const [taskText, setTaskText] = useState(initialText ||'')
    const [priority, setPriority] = useState('')

    const handleSave = () => {
        if (!taskText.trim() || !priority) return;
        const newTask = {
            tasks: noteText.trim(),
            notePriority: priority,
            createdAt: new Date().toISOString(),
        }
        onSave(newTask);
        }

return(

    <div className="modal-overlay">
        <div className="modal-edit-note">
            <h3>New Task</h3>
            <textarea
                placeholder="Write your note here..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <div className="noteTag">
                <label>Select a priority:</label> 
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="Escalated">Escalated</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  
                </select>
            </div>
            <div className="modal-footer">
                <button className="save-button" onClick={handleSave} disabled={!taskText.trim() || !tag}>
                    Save
                </button>
                <button className="cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    </div>
    )

}
