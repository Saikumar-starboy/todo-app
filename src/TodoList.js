import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete, onUpdate }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index + 1}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
