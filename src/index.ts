import express from 'express'
import routes from './routes/index'
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT

// add middleware
app.use('/images', express.static(path.join(__dirname, '../images')))
app.use('/api', routes)

// start the server
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))

export = { app }
