import express from 'express';
import {
    listPets,
    getPet,
    editPet,
    addPet,
    deletePet,
} from "../../controllers/pets.controllers.js";

const router = express.Router();

router.get('/', listPets);

router.get('/:id', getPet);

router.put('/:id', editPet);

router.post('/', addPet);

router.delete('/:id', deletePet);

export default router;
// This file defines the routes for the pets API, including listing, getting, editing, adding, and deleting pets.
// It uses Express.js to create a router and maps HTTP methods to controller functions. The routes are then exported for use in the main application file.  