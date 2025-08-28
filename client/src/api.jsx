import axios from "axios";
const API_URL = "http://localhost:4000/api/tasks";

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// PATCH for toggling completed
export const toggleCompleted = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/toggle`);
  return response.data;
};
