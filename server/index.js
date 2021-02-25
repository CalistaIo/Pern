const express = require('express');
const PORT = 3000;
const cors = require('cors');
const pool = require('./db.js');
const todoRouter = require('./routes/todo.js');

const app = express(); // create server
app.use(express.json()); // access req.body, insert before router
app.use(todoRouter);

// middleware
app.use(cors());

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT);
})