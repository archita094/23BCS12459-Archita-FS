import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div className="todo">
    <div className="container">
      <div className="todo-app">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index} className={t.completed ? "completed" : ""}>
              <span onClick={() => handleToggleComplete(index)}>{t.text}</span>
              <button onClick={() => handleDeleteTask(index)}>X</button>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && <p className="empty-msg">No tasks yet!</p>}
      </div>
    </div>
    </div>
  );
};

export default Todo;
