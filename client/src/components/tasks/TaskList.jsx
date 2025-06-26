import React from 'react'
import { useState } from 'react'
import {FaCog, FaEllipsisH, FaTrash, FaPlus} from 'react-icons/fa'
import TaskCard from './TaskCard'


// Function to render an 'add task button' as a component

function AddButton({ onAdd, position }) {
    return (
        <div className={`add-button add-${position}`} onClick={onAdd}>
            <FaPlus />
        </div>
    )
}

export default function TaskList({
    tasks,
    onToggleComplete,
    onEditClick,
    onDeleteClick,
    onAddClick, //

}) {
    return (
        <div className="task-list">

            {/* + rendered above first task */}
            <AddButton onAdd={() => onAddClick(0)} position="above" />

            {tasks.map((task, i) => (
                <React.Fragment key={task.id}>
                <TaskCard
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                />
                {/* + between items and below the last */}
                <AddButton
                    onAdd={() => onAddClick(i + 1)}
                    position="below"
                />
            </React.Fragment>
            ))}
        </div>
    )  
}