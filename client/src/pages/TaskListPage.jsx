import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TaskList from '../components/tasks/TaskList'
import { useTasks } from '../hooks/useTasks'



import '../App.css'

function TaskListPage() {


    const { notes, addNote, editNote, removeNote } = useNotes()
    
    //const [tasks, setTasks] = useState([])



    return (
        <div>
        <h2>Task List</h2>
       <NoteList
        notes={notes}
        layout={"detailed"}
        /> 

    </div>
    )
}

export default TaskListPage