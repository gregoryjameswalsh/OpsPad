// routes/tasks.routes.js

import express from 'express';
import {
    getTasksBySite,
    getTaskById,
    editTask,
    addTask,
    setTaskAsDeleted,
    deleteTask,
} from "../controllers/tasks.controllers.js";

const router = express.Router();

router.get('/site/:siteId', getTasksBySite)
//router.get('/', listTasks);       *** Do I need to create a route for ALL tasks at some point?
router.get('/:id', getTaskById);
router.post('/', addTask);
router.put('/:id', editTask);
router.patch('/:id', setTaskAsDeleted)
router.delete('/:id', deleteTask);

export default router;

// This file defines the routes for the tasks API, including listing, getting, editing, adding, and deleting tasks.
// It uses Express.js to create a router and maps HTTP methods to controller functions. The routes are then exported for use in the main application file.  