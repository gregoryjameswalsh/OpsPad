// File: server/routes/onboardUser.routes.js
import express from 'express'
import { onboardUser, checkOnboardingStatus } from '../controllers/users.controllers.js'

const router = express.Router()

router.post('/', onboardUser)
router.get('/', checkOnboardingStatus)

//Debug Ping

router.get('/ping', (req, res) => {
  console.log('✅ PING received')
  res.json({ ok: true })
})

//End of Debug Ping

export default router