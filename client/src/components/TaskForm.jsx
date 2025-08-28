import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page from refreshing

    onAdd({
      title,
      description: "hardcoded for now",
      priority: "hardcoded for now",
    });
    setTitle("");
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

        <button>Add</button>
      </form>
    </>
  );
};

export default TaskForm;
