import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
// import 'dotenv/config'

// import tasksRoutes from './routes/tasks.Routes.js'
// import { notesRoutes, tasksRoutes, usersRoutes, onboardUserRoutes } from './routes/index.js'

import { notesRoutes, tasksRoutes, onboardUserRoutes } from './routes/index.js'
import profileRoutes from './routes/profile.routes.js';
import headerRoutes from './routes/header.routes.js';

const app = express()
app.use(cors())
app.use(express.json())


// Need to refactor at some point with index.js in each folder //
// Like the below... //
// import { notes, tasks, shifts, users } from './routes/index.js' //

console.log({ notesRoutes, tasksRoutes, headerRoutes })
// Routes //

app.use('/tasks', tasksRoutes)
app.use('/notes', notesRoutes)
//app.use('/users', usersRoutes)
app.use('/api/onboard-user', onboardUserRoutes)
app.use('/api/check-onboarding-status', onboardUserRoutes) // This route is for checking onboarding status, it should be handled in the onboardUserRoutes
app.use('/api/profile', profileRoutes)
app.use('/api/header-data', headerRoutes)

console.log('Available Endpoints:', listEndpoints(app))

export default app;