import express from 'express'
import resize from './api/resize'

const routes = express.Router()
let i = 0

routes.get('/', (req:express.Request, res:express.Response):void => {
    const response = `This is the resize API,<br>Visit = ${i}`
    i++
    res.send(response)
    
})

routes.use('/resize', resize)
export default routes