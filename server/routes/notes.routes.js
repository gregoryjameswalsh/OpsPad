// routes/notes.routes.js

import express from 'express';
import {
    editNote,
    addNote,
    setAsDeleted,
    deleteNote,
    getShiftNoteById,
    getShiftNotesBySite,
} from "../controllers/notes.controllers.js";

const router = express.Router();

router.get('/site/:siteId', getShiftNotesBySite)
router.get('/:id', getShiftNoteById)
router.post('/', addNote)
router.put('/:id', editNote)
router.patch('/:id', setAsDeleted)
router.delete('/:id', deleteNote)

export default router;
// This file defines the routes for the pets API, including listing, getting, editing, adding, and deleting pets.
// It uses Express.js to create a router and maps HTTP methods to controller functions. The routes are then exported for use in the main application file.  