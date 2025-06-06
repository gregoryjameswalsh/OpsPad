import React, { useState } from 'react'

import '../../App.css'


function EditNoteModal({ note, onSave, onDelete, onClose }) {


return (
    <div className="modal-overlay">
        <div className="modal-content">
            <header className="modal-header">
                <h2>Edit Note</h2>
                <button className="close-button" onClick={onClose}>
                    x
                </button>
            </header>
        </div>
    </div>



)

}

export default EditNoteModal
