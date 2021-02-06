import express from 'express'
import { join } from 'path'
import { router } from './api'

const PORT = 8000

const app = express()
app.use(express.json())
app.use(express.static(join(__dirname, 'public')))
router(app)

app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`))