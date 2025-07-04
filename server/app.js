import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'

import { headerRoutes, notesRoutes, onboardUserRoutes, profileRoutes, tasksRoutes, } from './routes/index.js'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(express.json())


// Need to refactor at some point with index.js in each folder //
// Like the below... //
// import { notes, tasks, shifts, users } from './routes/index.js' //

// Routes //

app.use('/api/tasks', tasksRoutes)
app.use('/notes', notesRoutes)
//app.use('/users', usersRoutes) - this needs to be written at some point
app.use('/api/onboard-user', onboardUserRoutes)
app.use('/api/check-onboarding-status', onboardUserRoutes) // This route is for checking onboarding status, it should be handled in the onboardUserRoutes
app.use('/api/profile', profileRoutes)
app.use('/api/header-data', headerRoutes)

app.use('/api/shift-notes', notesRoutes)



export default app;