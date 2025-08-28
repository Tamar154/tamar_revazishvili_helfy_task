import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return tasks.map((task) => (
    <TaskItem key={task.id} task={task} onDelete={onDelete} />
  ));
};

export default TaskList;
