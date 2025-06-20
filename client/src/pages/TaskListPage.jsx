import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import EditTaskModal from '../components/modals/EditTaskModal'
import NewTaskModal from '../components/modals/NewTaskModal'

import TaskList from '../components/tasks/TaskList'
import { useTasks } from '../hooks/useTasks'



import '../App.css'

function TaskListPage() {

    const { tasks, addTask, editTask, removeTask } = useTasks()
    const [selectedTask, setSelectedTask] = useState(null)
    const [newTaskText, setNewTaskText] = useState('')
    const [newTaskInitialText, setNewTaskInitialText] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)
  
      const openEditModal = (task) => {
            setSelectedTask(task)
            setIsModalOpen(true)
      }
    
    return (
        <div className="dashboard-page">
            <div className="dashboard-summary">
                <div className="dashboard-flex-container">

                <TaskList
                tasks={tasks}
                layout={"detailed"}
                /> 

                <div>
                <div>
                    Checklist % bar thing here?
                </div>
                    
                <div>
                    <input 
                    className="note-input" 
                    type="text" 
                    placeholder="Add a task..."
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    />

                    <button 
                    className="new-button"
                    onClick={() => {
                        if (!newTaskText.trim()) return           // Don't open modal if input is empty
                        setNewTaskInitialText(newTaskText.trim()) //pass the trimmed text to the modal
                        setNewTaskText('')                        //clear the input field
                        setIsNewTaskModalOpen(true)               //open the modal
                        console.log('New Task Modal Opened')
                    }}
                    >+
                    </button> 
               </div>
            </div>

                
        </div>
    </div>
</div>
    )
}

export default TaskListPage