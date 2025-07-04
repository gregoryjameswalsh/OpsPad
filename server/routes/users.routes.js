// routes/users.routes.js

import express from 'express';
import {
    listUsers,
    getUser,
    editUser,
    addUser,
    deleteUser,
} from "../controllers/users.controllers.js";

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.post('/', addUser);
router.delete('/:id', deleteUser);

export default router;

// This file defines the routes for the users API, including listing, getting, editing, adding, and deleting tasks.
// It uses Express.js to create a router and maps HTTP methods to controller functions. The routes are then exported for use in the main application file.  