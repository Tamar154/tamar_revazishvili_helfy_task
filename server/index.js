const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

/* Middleware */
app.use(cors());
app.use(express.json());

// local DB
let tasks = [
  {
    id: 1,
    title: "test",
    description: "test",
    completed: false,
    createdAt: new Date(),
    priority: "low",
  },
];

let nextId = 2; // not efficient, but no conflicts should occur as value only increases.

/* Routes */

// GET all
app.get("/api/tasks", (request, response) => {
  response.json(tasks);
});

// POST
app.post("/api/tasks", (request, response) => {
  const newTask = {
    id: nextId++,
    title: request.body.title,
    description: request.body.description,
    completed: false, // default false
    createdAt: Date.now(),
    priority: request.body.priority,
  };

  tasks.push(newTask);
  response.status(201).json(newTask);
});

// PUT
app.put("/api/tasks/:id", (request, response) => {
  const task = tasks.find((t) => t.id === parseInt(request.params.id)); // find the task to update

  // Update task
  if (task) {
    task.title = request.body.title;
    task.description = request.body.title;
    task.priority = request.body.priority;

    // Update task in DB
    tasks = tasks.map((t) => (t.id === task.id ? task : t));

    response.json(task);
  } else {
    response.status(404).send("Not found");
  }
});

// DELETE
app.delete("/api/tasks/:id", (request, response) => {
  tasks = tasks.filter((task) => task.id !== parseInt(request.params.id));
  response.send();
});

// PATCH toggle completion
app.patch("/api/tasks/:id/toggle", (request, response) => {
  const task = tasks.find((t) => t.id === parseInt(request.params.id)); // find the task to update

  if (task) {
    task.completed = !task.completed;
    tasks = tasks.map((t) => (t.id === task.id ? task : t));
    response.json(task);
  } else {
    response.status(404).send("Not found");
  }
});

app.listen(PORT, () => console.log("Listening on PORT: ", PORT));
