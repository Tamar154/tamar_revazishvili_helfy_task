import { useState, useEffect } from "react";
import "./App.css";
import { getTasks } from "./api";
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

  return (
    <div>
      {/* <TaskForm /> */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
