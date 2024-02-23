// src/components/List/List.js
import React from 'react';
import './List.css';

const List = ({ users, onItemClick }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} onClick={() => onItemClick(user.login)}>
          <img src={user.avatar_url} alt={user.login} />
          <span>{user.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
