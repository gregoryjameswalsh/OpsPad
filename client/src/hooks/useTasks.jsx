import { useState, useEffect, useCallback } from 'react'
import { fetchTasks, createTask, updateTask, deleteTaskById } from '../api/TasksApi'
import NewTaskModal from '../components/modals/NewTaskModal'

const API = import.meta.env.VITE_API_BASE

export function useTasks() {
    const [tasks, setTasks] = useState([])

    const siteId = sessionStorage.getItem('site_id');
    const userId = sessionStorage.getItem('user_id'); 

    const fetchTasks = useCallback(() => {
        if (!siteId) return Promise.resolve();

        return fetch(`${API}/api/tasks/site/${siteId}`)
            .then(res => {
            if (!res.ok) throw new Error(`Failed to load tasks (${res.status})`);
        return res.json();
      })
        .then(data => setTasks(data))
        .catch(err => {
        console.error('[useTasks] fetchTasks error', err);
        setNotes([]);
      });
    }, [siteId]);


// *** REST OF CODE BELOW NEEDS REFACTORING STILL FOR SUPABASE *** \\



// *** Start of the hooks 
    useEffect(() => {
        fetchTasks()
        .then((res) => {
            console.log('Fetched from API:', res.data[0])
        console.log('Fetched tasks:', res.data) 
        setTasks(res.data)
        })
        .catch(console.error)
    }, [])

    const addTask = async (newTask) => {
        const res = await createTask(newTask)
        setTasks((prev) => [...prev, res.data])
    }

    const addTaskAtIndex = async (newTask, index) => {
        const res = await createTask(newTask)
        setTasks(prev => {
            const copy = [...prev]
            copy.splice(index, 0, res.data)
            return copy
        })
        return res.data
    }

    const editTask = async (updatedTask) => {
        await updateTask(updatedTask)
        setTasks((prev) => prev.map((n) => (n.id === updatedTask.id ? updatedTask : n)))
    }

    const removeTask = async (id) => {
        await deleteTaskById(id)
        setTasks((prev) => prev.filter((n) => n.id !== id))
    }

    return { tasks, addTask, addTaskAtIndex, editTask, removeTask }
}
