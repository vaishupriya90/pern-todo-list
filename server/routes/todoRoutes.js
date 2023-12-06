import express from 'express'
import TodoModel from '../models/TodoModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const todoList = await TodoModel.findAll()
  console.log('todo list: ', todoList)
  res.send(`${JSON.stringify(todoList[0].dataValues)}`)
})

export default router
