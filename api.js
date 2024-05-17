// api.js
const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTodoById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching TODO with ID ${id}:`, error);
    throw error;
  }
}

async function fetchEvenTodos() {
  const todoPromises = [];
  for (let i = 2; i <= 40; i += 2) {
    todoPromises.push(fetchTodoById(i));
  }

  try {
    const todos = await Promise.all(todoPromises);
    return todos.slice(0, 20); // Ensuring we only get the first 20
  } catch (error) {
    console.error('Error fetching even-numbered TODOs:', error);
    throw error;
  }
}

module.exports = {
  fetchEvenTodos
};