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
                    Add a task box in this bottom half?
                </div>
                </div>

                
                </div>
</div>
    </div>
    )
}

export default TaskListPage