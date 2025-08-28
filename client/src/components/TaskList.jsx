import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return tasks.map((task) => <TaskItem task={task} />);
};

export default TaskList;
