import {FaCog, FaEllipsisH, FaTrash, FaPlus} from 'react-icons/fa'
import { IoTrashOutline } from 'react-icons/io5'


export default function TaskCard({
    task,
    onToggleComplete,
    onEditClick,
    onDeleteClick,
}) {
    
    const time = new Date(task.dueTime).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })

    // *** NEED TO UPDATE CSS - remove note / change to task || OR refactor CSS?

    return (


        <div className="task-line">
            <input 
                type="checkbox" 
                checked={!!task.isComplete}
                onChange={() => onToggleComplete(task.id)}
            />

            <span className="task-title" onClick={() => onEditClick(task)}>{task.title}</span>        
            <span className="task-assigned-to">{task.assignedTo}</span>
            <span className="task-time">{time}</span>

            {/* Hover-only action items */}

            <div className="task-actions">
            <FaEllipsisH onClick={() => onEditClick(task)} />
            <IoTrashOutline onClick={() => onDeleteClick(task.id)} />
            </div>
        </div>

    )
}

