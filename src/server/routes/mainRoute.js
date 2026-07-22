import express from 'express'
import { getMessage, createMessage } from '../controllers/mainController.js'


const mainRoute = express.Router()



mainRoute.get('/wel', getMessage)
mainRoute.post('/wel', createMessage)

export default mainRoute


