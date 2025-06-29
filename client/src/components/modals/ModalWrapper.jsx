//import '../../styles/modal.css'

export default function ModalWrapper({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">×</button>
        {children}
      </div>
    </div>
  )
}