import express from 'express';
import { getHeaderData } from '../controllers/header.controllers.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getHeaderData);

export default router;