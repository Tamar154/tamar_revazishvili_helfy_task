import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <p>
        Filter By:
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </p>

      {filter === "all"
        ? tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        : filter === "completed"
        ? tasks
            .filter((t) => t.completed)
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))
        : tasks
            .filter((t) => !t.completed)
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))}
    </div>
  );
};

export default TaskList;
