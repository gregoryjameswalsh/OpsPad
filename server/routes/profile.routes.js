// /server/routes/profile.routes.js
import express from 'express'
import { getProfile } from '../controllers/profile.controllers.js'

const router = express.Router()

router.get('/', getProfile)

export default router