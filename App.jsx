import { useState } from "react";
import "./styles.css";
import List from "./List";
function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodoItem() {
    if (newTodo === "") return;
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { name: newTodo, completed: false, id: crypto.randomUUID },
      ];
    });
    setNewTodo("");
  }

  function deleteTodo(todoID) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== todoID);
    });
  }

  function toggleTodo(todoId, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed: !completed };

        return todo;
      });
    });
  }

  return (
    <>
      <ul id="list">
        {todo.map((todo) => {
          return (
            <List
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          id="todo-input"
        />
        <button onClick={(e) => addTodoItem(todo.id, e.target.checked)}>
          Add Todo
        </button>
      </div>
    </>
  );
}

export default App;
