import { getItem, listItems, editItem, addItem, deleteItem } from '../../../b_end/pets/models/notes.models.js';

export const getNote = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)

    }   catch (err) {
        res.status(500).send(err)
    }
}

export const listNotes = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const editNote = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addNote = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteNote = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}