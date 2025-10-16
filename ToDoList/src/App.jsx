import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text, isImportant) => {
    const task = {
      id: Date.now(),
      text,
      completed: false,
      important: isImportant,
      dueDate: null, // Nova propietat
    };
    setTasks([...tasks, task]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDateChange = (taskId, newDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, dueDate: newDate } : task
      )
    );
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
          onDateChange={handleDateChange}
        />
      </div>
    </div>
  );
}

export default App;