import React, { useState, useEffect } from 'react'

import '../../App.css'






function EditTaskModal({ task, onSave, onDelete, onClose }) {
//copy the passed-in note to local state so we can edit it in a controlled input
    const [formState, setFormState] = useState({
        id: task.id,
        assignedTo: task.assignedTo,
        createdAt: task.createdAt,
        priority: task.priority,
    })

// failsafe - is the parent ever changes which 'note' is selected, make sure formState is updated accordingly
    useEffect(() => {
        setFormState({
            id: task.id,
            assignedTo: task.assignedTo,
            createdAt: task.createdAt,
            priority: task.priority,
        })
    }, [task])

function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value}))
}

function handleSave(e) {
    e.preventDefault();
    // optionally validate here at some point...
    onSave(formState);
}

function handleDelete(e) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this task? This cannot be undone."))
    {
        onDelete(task.id)
    }
}


return (
    <div className="modal-overlay">
        <div className="modal-content">
            <header className="modal-header">
                <h2>Edit Task</h2>
                <button className="close-button" onClick={onClose}>
                    x
                </button>
            </header>

            <form className="modal-form" onSubmit={handleSave}>
                <label>
                    Priority:
                    <select
                        name="taskPriority"
                        value={formState.taskPriority}
                        onChange={handleChange}
                        required
                    >   
                        <option value="Escalated">Escalated</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>

                <label>
                    Owner:
                    <textarea
                        name="assignedTo"
                        value={formState.tasks}
                        onChange={handleChange}
                        rows={4}
                        required
                        />
                </label>

                <footer className="modal-footer">
                    <button
                    type="button"
                    className="delete-button"
                    onClick={handleDelete}
                    >Delete
                    </button>

                    <button
                    type="button"
                    className="cancel-button"
                    onClick={onClose}
                    >Cancel
                    </button>

                    <button
                    type="submit"
                    className="save-button"
                    >Save
                    </button>
                    
                    
                    </footer>    
            </form>
        </div>
    </div>
    )
}

export default EditTaskModal
