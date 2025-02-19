import React from 'react';
import './UserCard.css';

export const UserCard = ({name, email, age}) => {
  return (
    <div className='user-card'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
    </div>
  )
}
