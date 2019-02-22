import React from 'react';
import User from '../Components/User';

const UsersList = ({title, users}) => {
  let list = users.map((user, key) => {
    return (
      <li key={key}>
        <User user={user} />
      </li>
    );
  });

  return (
    <div className="user-list-container">
      <h2>{title}</h2>
      <div className="user-list">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default UsersList;
