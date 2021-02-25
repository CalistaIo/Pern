const express = require('express');
const PORT = 3000;
const cors = require('cors');

const app = express(); // create server

// middleware
app.use(cors());
app.use(express.json()); // access req.body

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT);
})