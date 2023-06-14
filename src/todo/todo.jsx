import React, {useState} from "react";
import "./todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showDelBtn, setShowDelBtn] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
      setShowDelBtn(true);
    }
  };

  const handleDeleteAll = () => {
    setTodos([]);
    setShowDelBtn(false);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    if (todos.length === 1) {
      setShowDelBtn(false);
    }
    console.log(todos.length);
  };

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Todo List</h1>
      <form onSubmit={handleFormSubmit} className="todo-app__form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="todo-app__input"
        />
        <button type="submit" className="todo-app__button">
          Add
        </button>
      </form>
      <ul className="todo-app__list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-app__item">
            {todo}
            <button
              onClick={() => handleDeleteTodo(index)}
              className="todo-app__delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showDelBtn && (
        <button onClick={handleDeleteAll} className="btn-del">
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoApp;
