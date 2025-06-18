// routes/tasks.routes.js

import express from 'express';
import {
    listTasks,
    getTask,
    editTask,
    addTask,
    deleteTask,
} from "../controllers/tasks.controllers.js";

const router = express.Router();

router.get('/', listTasks);

router.get('/:id', getTask);

router.put('/:id', editTask);

router.post('/', addTask);

router.delete('/:id', deleteTask);

export default router;

// This file defines the routes for the tasks API, including listing, getting, editing, adding, and deleting tasks.
// It uses Express.js to create a router and maps HTTP methods to controller functions. The routes are then exported for use in the main application file.  