import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      return;
    }
    onAdd(taskName);
    setTaskName('');
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;
