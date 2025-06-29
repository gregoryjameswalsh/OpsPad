import React, { useState, useEffect } from 'react'

import ModalWrapper from './ModalWrapper'
import '../../App.css'
import '../../styles/Modal.css'






function EditTaskModal({ task, onSave, onRequestDelete, onClose }) {
//copy the passed-in note to local state so we can edit it in a controlled input
    const [formState, setFormState] = useState({
        id: task.id,
        title: task.title,
        assignedTo: task.assignedTo,
        createdAt: task.createdAt,
        priority: task.priority,
    })

// failsafe - is the parent ever changes which 'note' is selected, make sure formState is updated accordingly
    useEffect(() => {
        setFormState({
            id: task.id,
            title: task.title,
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
    e.preventDefault()
    // optionally validate here at some point...
    onSave(formState)
    onClose()
}

function handleDelete(e) {
    e.preventDefault();
    onRequestDelete(task)
}


return (
    <>
    <ModalWrapper isOpen={true} onClose={onClose}>
        <h2>Edit Task</h2>
        <form className="modal-form" onSubmit={handleSave}>
            <label>
                Task:
                <textarea
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    rows={4}
                    required
                />
            </label>

            <label>
                Priority:
                <select
                    name="taskPriority"
                    value={formState.priority}
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
                    value={formState.assignedTo}
                    onChange={handleChange}
                    rows={4}
                    required
                />
            </label>

                <div className="modal-footer">
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

                </div>
            </form>
    </ModalWrapper>
    </>
    )
}

export default EditTaskModal
