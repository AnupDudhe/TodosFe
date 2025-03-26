import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get(`${API_BASE_URL}/todos`).then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (!text.trim()) return;
    axios.post(`${API_BASE_URL}/todos`, { text, completed: false }).then((res) => {
      setTodos([...todos, res.data]);
      setText("");
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`${API_BASE_URL}/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// CSS styles (can be added to index.css or App.css)
const styles = `
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

input {
  width: 70%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 12px;
  margin-left: 5px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #218838;
}

ul {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #f8f9fa;
  margin: 5px 0;
  border-radius: 4px;
}

.todo-item button {
  background-color: #dc3545;
}

.todo-item button:hover {
  background-color: #c82333;
}
`;

document.head.appendChild(document.createElement("style")).textContent = styles;



/*import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get(`${API_BASE_URL}/todos`).then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    axios.post(`${API_BASE_URL}/todos`, { text, completed: false })
      .then((res) => setTodos([...todos, res.data]));
  };

  const deleteTodo = (id) => {
    axios.delete(`${API_BASE_URL}/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)));
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text} <button onClick={() => deleteTodo(todo._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;  */ 
