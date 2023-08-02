import React, { useState } from 'react';

const TodoEdit = ({ todo, onEdit }) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleInputChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleUpdateTask = () => {
    if (editedTitle.trim() === '') {
      return;
    }
    onEdit(todo.id, editedTitle);
  };

  return (
    <div className="todo-edit">
      <input
        type="text"
        value={editedTitle}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdateTask}>Save</button>
    </div>
  );
};

export default TodoEdit;
