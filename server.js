var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];
let primaryId = 2;
// GET /api/todos
app.get('/api/todos', (req, res) => {
    res.send(todoList);
});

// GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    let id = req.params.id; // setting variable "id" to parameter id in req body
    let foundTask = todoList.find(function(task){
        return task.id == id;
    })
    res.send(foundTask);

});

// POST /api/todos
app.post('/api/todos', (req, res)=>{
    // req.body now represents the actual request body
    // as a javascript object
    // allow for food_name, customer_name, quantity
    todoList.push({
        id: primaryId,
        todo: req.body.todo
    
    });
    primaryId++;
    res.send("Order created successfully")

})

// PUT /api/todos/:id
app.put('api/todos/:id', (req, res) =>{
    let id = req.params.id;
    let foundTask = todoList.find(function(task){
        return task.id == id;
    })
    res.send(foundTask);
})

// DELETE /api/todos/:id
app.delete('api/todos/id:', (req, res) => {
    

})

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})