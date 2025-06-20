export default function TaskCard({ task, onClick, layout = 'summary' }) {
    console.log(task)
    const time = new Date(task.createdAt).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    // *** NEED TO UPDATE CSS - remove note / change to task || OR refactor CSS?


    return (
        <div className={`note-line ${layout}`} onClick={() => onClick?.(task)}>
            <input type="checkbox" />
            <span className="task-tickbox">{task.isCompleted}</span>
            
            <span className="note-title">{task.title}</span>        
            <span className="note-text">{task.notes}</span>
            <span className="task-assigned-to">{task.assignedTo}</span>

            {layout === 'detailed' && (
                <div>
                    <span>{task.authorId}</span>
                <p>more detail goes here</p>
                </div>
            )}
        </div>
    )
}