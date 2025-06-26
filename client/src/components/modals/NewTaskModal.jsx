import { useState, useEffect } from 'react';
import {FaPlus } from 'react-icons/fa';
import '../../App.css'

export default function NewTaskModal({
    initialText = '',
    onSave,
    onClose,
}) {
    const [title, setTitle] = useState(initialText)
    const [priority, setPriority] = useState('')

    // keep in sync if initialText changes
    useEffect(() => setTitle(initialText), [initialText])   

    function handleSave(e) {
        e.preventDefault()
        if (!title.trim() || !priority) return

        const newTask = {
            title: title.trim(),
            priority,
            assignedTo: '',
            dueTime: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            isComplete: false,
        }

        onSave(newTask)
        onClose()
    }

return(

    <div className="modal-overlay">
        <div className="modal-content">
            <header className="modal-header">
            <h3>New Task</h3>
            <button onClick={onClose} className="close-button">x</button>
            </header>

            <form className="modal-form" onSubmit={handleSave}>
                <label>Task:
                    <input
                        type="text"
                        placeholder="What needs doing..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Priority:
                    <select 
                        value={priority} 
                        onChange={e => setPriority(e.target.value)}
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="Escalated">Escalated</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>    
                </label>

                <footer className="modal-footer">
                    <button 
                        type="button"
                        className="cancel-button"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        className="save-button"
                        disabled={!title.trim() || !priority}
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    </div>
    )
}
