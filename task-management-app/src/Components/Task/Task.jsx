import React from 'react'
import './Task.css';

export const Task = ({ title, desc, date, onEdit, onDelete }) => {
  return (
    <div className='task-card'>
      <div className="top-container">
        <div className='title'>{title}</div>
        <div className="date"><span>Due: </span>{date}</div>
      </div>
      <div className='description'><p>{desc}</p></div>
      <div className="delete-edit">
        <i class="fa-solid fa-pen" onClick={onEdit}></i>
        <i class="fa-solid fa-trash" onClick={onDelete}></i>
      </div>
    </div>
  )
}
