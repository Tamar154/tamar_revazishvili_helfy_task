const TaskItem = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <span>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{`priority: ${task.priority}`}</p>
      <p>{`created at: ${task.createdAt}`}</p>

      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
      <button>Toggle complete</button>
    </span>
  );
};

export default TaskItem;
