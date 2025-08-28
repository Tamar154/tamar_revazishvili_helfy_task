import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page from refreshing

    onAdd({
      title,
      description,
      priority,
    });
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  console.log(title);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button>Add</button>
      </form>
    </>
  );
};

export default TaskForm;
