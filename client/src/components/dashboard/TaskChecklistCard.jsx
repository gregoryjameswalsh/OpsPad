import { useState } from 'react'

import '../../App.css'

import ConfirmDeleteModal from '../modals/ConfirmDeleteModal'
import { useTasks } from '../../hooks/useTasks'
import TaskList from '../tasks/TaskList'

export default function TaskChecklistCard() {

  const { tasks, addTask, editTask, removeTask } = useTasks()
  const [selectedTask, setSelectedTask] = useState(null)
  const [ShowDeleteModal, setShowDeleteModal] = useState(false)

  const handleToggleComplete = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    const updatedTask = { ...task, isComplete: !task.isComplete }
    editTask(updatedTask)
    console.log('Saving...', updatedTask)
  }


    const handleDeleteClick = (taskId) => {
    const task = tasks.find(t => t.id === taskId)
    if (!task) return
        setSelectedTask(task)
        setShowDeleteModal(true)
    }

    const handleConfirmDelete = () => {
    if (selectedTask) {
        console.log('Deleting task:', selectedTask)
        removeTask(selectedTask.id)
        setShowDeleteModal(false)
        setSelectedTask(null)
    }}

    const handleCancelDelete = () => {
        setShowDeleteModal(false)
    }





// Need Modal Handling to go in here! if needed?

  return (
<>
    <div>
      <TaskList
        tasks={tasks}
        layout="summary"
        onToggleComplete={handleToggleComplete}

        onDeleteClick={handleDeleteClick}
        />
    </div>


            <ConfirmDeleteModal
                isOpen={ShowDeleteModal}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
</>
  );
}