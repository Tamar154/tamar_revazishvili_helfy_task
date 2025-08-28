const TaskItem = ({ task }) => {
  return (
    <span>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{`priority: ${task.priority}`}</p>
      <p>{`created at: ${task.createdAt}`}</p>

      <button>Delete</button>
      <button>Edit</button>
      <button>Toggle complete</button>
    </span>
  );
};

export default TaskItem;
