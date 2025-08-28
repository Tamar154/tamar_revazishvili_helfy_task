const TaskItem = ({ task, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(task);
  };

  const handleToggle = () => {
    onToggle(task);
  };

  return (
    <span>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{`priority: ${task.priority}`}</p>
      <p>{`created at: ${task.createdAt}`}</p>
      <p> {task.completed ? "Completed" : "Not Completed"}</p>

      <button onClick={handleDelete}>❌ Delete</button>
      <button>✏️ Edit</button>
      <button onClick={handleToggle}>
        {" "}
        {task.completed ? "❎Mark Uncompleted" : "✅Mark Completed"}
      </button>
    </span>
  );
};

export default TaskItem;
