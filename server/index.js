import 'dotenv/config'
import listEndpoints from 'express-list-endpoints'
import app from './app.js'

console.log('Available Endpoints:', listEndpoints(app))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`✅ OpsPad API running on http://localhost:${PORT}`)
})