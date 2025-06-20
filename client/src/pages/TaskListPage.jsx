import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TaskList from '../components/tasks/TaskList'
import { useTasks } from '../hooks/useTasks'



import '../App.css'

function TaskListPage() {


    const { tasks, addTask, editTask, removeTask } = useTasks()
    
    //const [tasks, setTasks] = useState([])



    return (
        <div>
        <h2>Task List</h2>
       <TaskList
        tasks={tasks}
        layout={"detailed"}
        /> 

    </div>
    )
}

export default TaskListPage