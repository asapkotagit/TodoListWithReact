function List({ name, id, completed, deleteTodo, toggleTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          checked={completed}
          type="checkbox"
          data-list-item-checkbox
          onChange={toggleTodo}
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}

export default List;
