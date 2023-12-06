import express from 'express';
// import expressHandlebars from 'express-handlebars';
// import bodyParser from 'body-parser';
// import path from 'path'
// import sequelize from './conf/sequelizePostgres.js';
import todoRoutes from './routes/todoRoutes.js'

const server = express()

server.get('/', (req, res)=> res.send('INDEX!!!!'))

server.use('/todos', todoRoutes)

const PORT = process.env.PORT || 5000

server.listen(PORT,console.log(`server started on port ${PORT}`) )
