import { getItem, listItems, editItem, addItem, deleteItem } from '../../../b_end/pets/models/tasks.models.js';

export const getTask = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)

    }   catch (err) {
        res.status(500).send(err)
    }
}

export const listTasks = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editTask = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addTask = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteTask = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}