import { useState, useEffect } from "react";
import "./App.css";
import { getTasks, addTask, deleteTask } from "./api";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    const newTask = await addTask(task);
    console.log("Task from addTask: ", newTask);

    setTasks([...tasks, newTask]);
  };

  const handleDelete = async (task) => {
    await deleteTask(task.id);
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
