import express from 'express';
import {
    listNotes,
    getNote,
    editNote,
    addNote,
    deleteNote,
} from "../controllers/notes.controllers.js";

const router = express.Router();

router.get('/', listNotes);

router.get('/:id', getNote);

router.put('/:id', editNote);

router.post('/', addNote);

router.delete('/:id', deleteNote);

export default router;
// This file defines the routes for the pets API, including listing, getting, editing, adding, and deleting pets.
// It uses Express.js to create a router and maps HTTP methods to controller functions. The routes are then exported for use in the main application file.  