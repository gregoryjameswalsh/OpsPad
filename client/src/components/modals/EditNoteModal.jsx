import React, { useState, useEffect } from 'react'


import '../../App.css'


function EditNoteModal({ note, onSave, onDelete, onClose }) {
//copy the passed-in note to local state so we can edit it in a controlled input
    const [formState, setFormState] = useState({
        id: note.id,
        noteTag: note.noteTag,
        createdAt: note.createdAt,
        notes: note.notes,
    })

// failsafe - is the parent ever changes which 'note' is selected, make sure formState is updated accordingly
    useEffect(() => {
        setFormState({
            id: note.id,
            noteTag: note.noteTag,
            createdAt: note.createdAt,
            notes: note.notes,
        })
    }, [note])

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
    if (window.confirm("Are you sure you want to delete this note? This cannot be undone."))
    {
        console.log('[EditNoteModal] handleDelete:', note.id);
        onDelete(note.id)
    }
}










return (
    
    <div className="modal-overlay">
        <div className="modal-content">
            <header className="modal-header">
                <h2>Edit Note</h2>
                <button className="close-button" onClick={onClose}>
                    x
                </button>
            </header>

            <form className="modal-form" onSubmit={handleSave}>
                <label>
                    Tag:
                    <select
                        name="noteTag"
                        value={formState.noteTag}
                        onChange={handleChange}
                        required
                    >
                        <option value="Stock">Stock</option>
                        <option value="Incident">Incident</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Staffing">Staffing</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>
                    Notes:
                    <textarea
                        name="notes"
                        value={formState.notes}
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

export default EditNoteModal
