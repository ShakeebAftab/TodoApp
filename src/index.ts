import express, { json } from 'express'
import dontenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())
const PORT = process.env.PORT ? process.env.PORT : 3000

dontenv.config()

import connectDB from './DB/Connect'

connectDB()

import TodoRoutes from './Routes/api/Todo'

app.use('/api/todos', TodoRoutes)

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))