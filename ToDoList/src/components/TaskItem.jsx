import React from 'react';
import TaskDueDate from './TaskDueDate';

function TaskItem({ task, onToggleComplete, onDelete, onDateChange }) {
  return (
    <li
      className={`${task.completed ? 'completed' : ''} ${
        task.important ? 'important' : ''
      }`}
    >
      <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>

      {/* Selector de Data amb MUI */}
      <TaskDueDate
        dueDate={task.dueDate}
        onChange={(date) => onDateChange(task.id, date)}
      />

      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;