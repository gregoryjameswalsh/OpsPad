import { useState } from 'react'

import '../../App.css'

import ConfirmDeleteModal from '../modals/ConfirmDeleteModal'
import EditTaskModal from '../modals/EditTaskModal'
import { useTasks } from '../../hooks/useTasks'
import TaskList from '../tasks/TaskList'
import NewTaskModal from '../modals/NewTaskModal'


export default function TaskChecklistCard() {

  const { tasks, addTask, addTaskAtIndex, editTask, removeTask } = useTasks()
  const [selectedTask, setSelectedTask] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showNewModal, setShowNewModal] = useState(false)
  const [insertIndex, setInsertIndex] = useState(null)

  // Function to handle toggling task completion
  // This function finds the task by ID, toggles its isComplete status,
  // and saves the updated task using the editTask function from the useTasks hook.
  const handleToggleComplete = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    const updatedTask = { ...task, isComplete: !task.isComplete }
    editTask(updatedTask)
  }

  //Function to handle adding a new task
  // This function sets the showNewModal state to true,
  // which triggers the NewTaskModal to open.
  const handleAddClick = (index) => {
    setInsertIndex(index)
    setShowNewModal(true)
  }

  const handleSaveNew = async newTask => {
    await addTaskAtIndex(newTask, insertIndex)
    setShowNewModal(false)
  }

  // Function to handle editing a task
  // This function calls the EditTaskModal with the selected task

  const handleEditClick = (task) => {
    setSelectedTask(task)
    setShowEditModal(true)
  }


  // Functions to handle delete confirmation modal
  // These functions manage the state of the delete confirmation modal.
  // When a delete button is clicked, the selected task is set,
  // and the delete confirmation modal is shown.
  const handleDeleteClick = (taskId) => {
  const task = tasks.find(t => t.id === taskId)
    if (!task) return
      setSelectedTask(task)
      setShowDeleteModal(true)
    }

  const handleConfirmDelete = () => {
    if (selectedTask) {
      removeTask(selectedTask.id)
      setShowDeleteModal(false)
      setSelectedTask(null)
      }
    }

    const handleCancelDelete = () => {
      setShowDeleteModal(false)
    }

  // Render the task list and delete confirmation modal
  // Note: The task list is passed the tasks from the useTasks hook
  // and the functions to handle toggling completion and deleting tasks.
  return (
    <>
    <div>
      <TaskList
        tasks={tasks}

        onToggleComplete={handleToggleComplete}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        onAddClick={handleAddClick}
        />
    </div>

    <ConfirmDeleteModal
      isOpen={showDeleteModal}
      onClose={handleCancelDelete}
      onConfirm={handleConfirmDelete}
    />

    {showEditModal && selectedTask && (
    <EditTaskModal
      isOpen={showEditModal}
      onClose={() => setShowEditModal(false)}
      task={selectedTask}
      onSave={editTask}
    />
  )}

    {showNewModal && (
      <NewTaskModal
        initialText=""
        onSave={handleSaveNew}
        onClose={() => setShowNewModal(false)}
      />
    )}
    
  </>
  )
}