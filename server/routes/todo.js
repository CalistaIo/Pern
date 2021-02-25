const express = require('express');
const router = new express.Router();
const pool = require('../db.js');
const todo = require('../queries/todo.js');

// GET all Todos
router.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query(todo.getAllTodos);
        res.json(allTodos.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// GET a Todo
router.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const selectedTodo = await pool.query(todo.getTodo, [id]);
        res.json(selectedTodo.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// POST a Todo
router.post('/todos', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query(todo.createTodo, [description]);
        res.json(newTodo.rows[0]); // return Todo object
    } catch (e) {
        console.error(e.message);
    };
});

// PUT a Todo
router.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updatedTodo = await pool.query(todo.updateTodo, [description, id]);
        res.json("Todo was updated");
    } catch (e) {
        console.error(e.message);
    }
});

// DELETE a Todo
router.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await pool.query(todo.deleteTodo, [id]);
        res.json("Todo was deleted");
    } catch (e) {
        console.error(e.message);
    }
});

module.exports = router;