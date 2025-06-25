export default function TaskCard({ task, onToggleComplete, onEditClick, onDeleteClick, layout = 'summary' }) {

    const time = new Date(task.createdAt).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    // *** NEED TO UPDATE CSS - remove note / change to task || OR refactor CSS?

console.log('TaskCard render:', task)

    return (
        <div className={`note-line ${layout}`}>
            <input 
                type="checkbox" 
                checked={!!task.isComplete}
                onChange={() => onToggleComplete(task.id)}
            />

            <span className="note-title" onClick={() => onEditClick(task)}>{task.title}</span>        
            <span className="task-assigned-to">{task.assignedTo}</span>
            <span className="task-time">{time}</span>
            <button>
                <i className="fa-solid fa-trash"></i>
            </button>


            {layout === 'detailed' && (
                <div>
                    <span>{task.authorId}</span>
                <p>more detail goes here</p>
                </div>
            )}
        </div>
    )
}