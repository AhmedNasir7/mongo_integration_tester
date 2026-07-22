import Message from '../models/mainModel.js'

export async function getMessage(req, res) {
  const messages = await Message.find()
  res.json(messages)
}

export async function createMessage(req, res) {
  const { text } = req.body
  const message = await Message.create({ text })
  res.status(201).json(message)
}