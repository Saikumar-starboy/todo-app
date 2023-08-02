import React, { useState } from 'react';
import TodoEdit from './TodoEdit';

const TodoItem = ({ todo, index, onToggleComplete, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (taskId, editedTitle) => {
    setIsEditing(false);
    onUpdate(taskId, editedTitle);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {!isEditing ? (
        <>
          <span onClick={handleToggleComplete}>{index}. {todo.title}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <TodoEdit todo={todo} onEdit={handleUpdate} />
      )}
    </div>
  );
};

export default TodoItem;
