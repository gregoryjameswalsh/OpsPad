import { useState, useEffect } from 'react'
import { fetchTasks, createTask, updateTask, deleteTaskById } from '../api/TasksApi'

export function useTasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchTasks().then((res) => setTasks(res.data)).catch(console.error)
    }, [])

    const addTask = async (newTask) => {
        const res = await createTask(newTask)
        setTasks((prev) => [...prev, res.data])
    }

    const editTask = async (updatedTask) => {
        await updateTask(updatedTask)
        setTasks((prev) => prev.map((n) => (n.id === updatedTask.id ? updatedTask : n)))
    }

    const removeTask = async (id) => {
        await deleteTaskById(id)
        setTasks((prev) => prev.filter((n) => n.id !== id))
    }

    return { tasks, addTask, editTask, removeTask }
}
