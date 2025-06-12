import NoteCard from './NoteCard'


export default function NoteList({ notes, onNoteClick, layout = 'summary'}) {
    return (
        <div className="note-list">
            {notes.map(note => (
                <NoteCard
                    key={note.id}
                    note={note}
                    layout={layout}
                    onClick={onNoteClick}
                />
            ))}
        </div>
    )  
}