import TaskCard from './TaskCard'


export default function TaskList({ tasks, onNoteClick, layout = 'summary'}) {
    return (
        <div className="note-list">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    note={task}
                    layout={layout}
                    onClick={onNoteClick}
                />
            ))}
        </div>
    )  
}