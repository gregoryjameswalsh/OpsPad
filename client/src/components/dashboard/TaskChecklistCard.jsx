import { useState, useEffect } from 'react'
import axios from 'axios'

import '../../App.css' // Ensure you have the correct path to your CSS file

import { useTasks } from '../../hooks/useTasks'
import TaskList from '../tasks/TaskList'

export default function TaskChecklistCard() {

  const { tasks, addTask, editTask, removeTask } = useTasks()
  const [selectedTask, setSelectedTask] = useState(null)

  const handleToggleComplete = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    const updatedTask = { ...task, isComplete: !task.isComplete }
    editTask(updatedTask)
    console.log('Saving...', updatedTask)
  }

  const handleDeleteClick = (id) => {
    removeTask(id)
    console.log('Deleting task with id:', id)
  }

// Need Modal Handling to go in here! if needed?

  return (

    <div>
      <TaskList
        tasks={tasks}
        layout="summary"
        onToggleComplete={handleToggleComplete}

        onDeleteClick={handleDeleteClick}
        />
    </div>

  );
}