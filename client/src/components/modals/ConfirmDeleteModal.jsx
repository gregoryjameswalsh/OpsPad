import React from 'react'

export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    color: '#1C1C1C',
    backdropFilter: 'blur(2px)', // Optional: double-glass look
  }

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <h2 className="modal-title">Confirm Deletion</h2>
        <p className="modal-message">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div className="modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            className="cancel-button"
            onClick={onClose}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #607B7D',
              backgroundColor: 'transparent',
              color: '#1C1C1C',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            className="delete-button"
            onClick={onConfirm}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#DC3545',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
