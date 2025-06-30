import express from 'express'
import { onboardUser } from '../controllers/users.controllers.js'

const router = express.Router()

router.post('/', onboardUser)

export default router