export default function NoteCard({ note, onClick, layout = 'summary' }) {
    const time = new Date(note.created_at).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    return (
        <div className={`note-line ${layout}`} onClick={() => onClick?.(note)}>
            <span className="note-time">{time}</span>
            <span className={`tag ${note.tag.toLowerCase()}`}>{note.tag}</span>
            <span className="note-text">{note.note_title}</span>

            {layout === 'detailed' && (
                <div>
                    <span>{note.authorId}</span>
                <p>more detail goes here</p>
                </div>
            )}
        </div>
    )
}