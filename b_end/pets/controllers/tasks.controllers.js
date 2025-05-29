import { getTask, listTasks, editTask, addTask, deleteTask } from '../../../b_end/pets/models/tasks.models.js';

export const getTask = (req, res) => {
    try {
        const resp = getTask(parseInt(req.params.id))
        res.status(200).json(resp)

    }   catch (err) {
        res.status(500).send(err)
    }
}

export const listTasks = (req, res) => {
    try {
        const resp = listTasks()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editTask = (req, res) => {
    try {
        const resp = editTask(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addTask = (req, res) => {
    try {
        const resp = addTask(req.body)
        res.status(200).json(resp)
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteTask = (req, res) => {
    try {
        const resp = deleteTask(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}