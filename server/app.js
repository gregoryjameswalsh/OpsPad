import express from 'express';
import cors from 'cors';

import tasksRoutes from './routes/tasks.Routes.js'
import { notesRoutes, tasksRoutes } from './routes/index.js'

// Need to refactor at some point with index.js in each folder //
// Like the below... //
// import { notes, tasks, shifts, users } from './routes/index.js' //


const app = express()


// Middleware //

app.use(cors())
app.use(express.json())

// Routes //

app.use('/tasks', tasksRoutes)
app.use('/notes', notesRoutes)


export default app;