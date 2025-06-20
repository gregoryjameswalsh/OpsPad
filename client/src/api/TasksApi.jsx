import axios from 'axios'

const BASE_URL = 'http://localhost:3000/tasks'

export const fetchTasks = () => axios.get(BASE_URL)
export const createTask = (newTask) => axios.post(BASE_URL, newTask)
export const updateTask = (updatedTask) => axios.put(`${BASE_URL}/${updatedTask.id}`, updatedTask)
export const deleteTaskById = (id) => axios.delete(`${BASE_URL}/${id}`)