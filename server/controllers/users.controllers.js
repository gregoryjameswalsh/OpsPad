import { getItem, listItems, editItem, addItem, deleteItem } from '../models/users.models.js';

export const getUser = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)

    }   catch (err) {
        res.status(500).send(err)
    }
}

export const listUsers = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editUser = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addUser = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteUser = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}