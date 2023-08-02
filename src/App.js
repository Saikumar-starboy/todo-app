import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm'; 
import FilterButtons from './FilterButtons'; 
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: todos.length + 1,
      title: taskName,
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

  const handleToggleComplete = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTask = (taskId, newTaskName) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, title: newTaskName } : todo
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== taskId));
  };

  const handleUpdateTask = (taskId, editedTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, title: editedTitle } : todo
      )
    );
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTask} />
      <FilterButtons
        showAll={!showCompleted}
        onShowAll={() => setShowCompleted(false)}
        onShowCompleted={() => setShowCompleted(true)}
      />
      <TodoList
        todos={filteredTodos}
        onToggleComplete={handleToggleComplete}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
};

export default App;
