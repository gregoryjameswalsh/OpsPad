import express from 'express';
import cors from 'cors';

// import petRoutes from './pets/routes/pets.routes.js'

import tasksRoutes from './pets/routes/tasks.Routes.js'
import notesRoutes from './pets/routes/notes.routes.js'

const app = express()
const port = 3000

/* Global middewares */
app.use(cors())
app.use(express.json())

/* Routes */
// app.use('/pets', petRoutes)
app.use('/tasks', tasksRoutes)
app.use('/notes', notesRoutes)

/* Server Setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
}

export default app;