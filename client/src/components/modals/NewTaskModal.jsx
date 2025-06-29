import { useState, useEffect } from 'react';
import {FaPlus } from 'react-icons/fa';
import ModalWrapper from './ModalWrapper';
import '../../App.css'
import '../../styles/Modal.css';

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
<>
<ModalWrapper isOpen={true} onClose={onClose}>
            <h3>New Task</h3>
            <form className="modal-form" onSubmit={handleSave}>
                <label>Task:
                    <input
                        type="text"
                        placeholder="What needs doing..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        style={{
              width: '100%',
              marginTop: '0.5rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #607B7D',
            }}
                    />
                </label>

                <label>
                    Priority:
                    <select 
                        value={priority} 
                        onChange={e => setPriority(e.target.value)}
                        required
                                    style={{
              width: '100%',
              marginTop: '0.5rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #607B7D',
            }}
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
            </ModalWrapper>
        </>
    
    )
}
