export default function NoteList({ notes, onEdit}) {
    return (
        <div className="note">
            {notes.map(note => {
                const time = new Date(note.createdAt).toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    time: '2-digit',
                    hour12: false,
                })

                return (
                  <div className="note-line" key={note.id} onClick={() => onEdit(note)}>
                    <span className="note-time">{time}</span>
                    <span className={`tag ${note.noteTag.toLowerCase()}`}>{note.noteTag}</span>
                    <span className="note-text">{note.notes}</span>
                  </div>  
                )

            })}
        </div>
    )  
}