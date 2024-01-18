import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
// import path from 'path'
import todoRoutes from './routes/todoRoutes.js'

const app = express()

app.use(bodyParser.json()); // TO parse the data sent from the client

app.use(cors())

app.get('/', (req, res)=> res.send('INDEX!!!!'))

app.use('/todos', todoRoutes)
app.post('/todos/create', todoRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started on port ${PORT}`) )
