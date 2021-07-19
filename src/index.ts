import express from 'express'
import dontenv from 'dotenv'

const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3000

dontenv.config()

import connectDB from './DB/Connect'

connectDB()

app.get('/', (_, res) => {
    res.send('Server Running')
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))