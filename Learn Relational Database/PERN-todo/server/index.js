const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


// Middleware
app.use(cors());
app.use(express.json());    // req.body


/* BUILD ROUTES WITH POSTGRES QUERIES (Restful API with PostgreSQL) */

// Create a ToDo
app.post('/todos', async(req,res) => {
    try {
        const {description} = req.body;
        // console.log(description);
        if(description) {
            const newTodo = await pool.query('INSERT INTO todo(description) VALUES($1) RETURNING *;', [description]);
            res.json(newTodo.rows[0]);
        }
    } catch(err) {
        console.log(err.message);
    }
});

// Get All ToDos
app.get('/todos', async(req,res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo ORDER BY todo_id;');
        res.json(allTodos.rows);
    } catch(err) {
        console.log(err.message);
    }
});

// Get A ToDo
app.get('/todos/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const oneTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1;', [id]);
        res.json(oneTodo.rows[0]);
    } catch(err) {
        console.log(err.message);
    }
});

// Update A ToDo
app.put('/todos/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const oneTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2;', [description,id]);
        res.json('ToDo is Updated!');
    } catch(err) {
        console.log(err.message);
    }
});

// Delete A ToDo
app.delete('/todos/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const oneTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1;', [id]);
        res.json('ToDo is Deleted!');
    } catch(err) {
        console.log(err.message);
    }
});


app.listen(5000, () => {
    console.log('Server is Running on Port 5000');
});


// jab bhi client-side sy data aata to woh request.body object mein aata hai.
