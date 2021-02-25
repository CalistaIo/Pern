const todo = {
    createTodo: "INSERT INTO Todo (description) VALUES ($1) RETURNING *",
    getAllTodos: "SELECT * FROM Todo",
    getTodo: "SELECT * FROM Todo WHERE todo_id = $1",
    deleteTodo: "DELETE FROM Todo WHERE todo_id = $1 RETURNING *",
    updateTodo: "UPDATE Todo SET description = $1 WHERE todo_id = $2 RETURNING *"
}

module.exports = todo;