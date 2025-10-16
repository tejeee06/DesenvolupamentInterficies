import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e, isImportant = false) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    onAddTask(newTask, isImportant);
    setNewTask('');
  };

  return (
    <form className="task-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Afegeix una nova tasca..."
        className={newTask.trim() === '' ? 'input-empty' : ''}
      />
      <div className="button-group">
        <button type="submit" onClick={(e) => handleSubmit(e, false)}>
          Afegir
        </button>
        <button
          type="submit"
          className="important-btn"
          onClick={(e) => handleSubmit(e, true)}
        >
          Afegir Important
        </button>
      </div>
    </form>
  );
}

export default TaskForm;