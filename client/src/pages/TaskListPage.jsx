import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function TaskListPage() {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            /* FETCH */
            // const response = await fetch('http://localhost:3000/pets')
            //const data = await response.json()
            // if (response.status === 200) setPets(data)

            /* AXIOS */
            const response = await axios.get(`http://localhost:3000/tasks`)
            if (response.status === 200) setTasks(response.data)

        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => { getTasks() }, [])
    console.log(tasks)

    return (
        <>
        <h2>Task List</h2>
        
        {tasks?.map((task) => {
            return (
                <div key={task?.id}>
                    <p>{task?.title} - {task?.isCompleted} - {task?.assignedTo}</p>

                    <Link to={`/${task?.id}`}>
                    <button>Task detail</button></Link>
                </div>
            )
        })}
    </>
    )
}

export default TaskListPage