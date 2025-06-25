import TaskCard from './TaskCard'


export default function TaskList({ tasks, onToggleComplete, onEditClick, onDeleteClick, layout = 'summary'}) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    layout={layout}
                    onToggleComplete={onToggleComplete}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                />
            ))}
        </div>
    )  
}