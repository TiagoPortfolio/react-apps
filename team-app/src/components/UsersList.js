import React from 'react';
import User from './User';
import UsersLoader from '../components/UsersLoader';

const UsersList = ({users, page, pageLimit, isLoading}) => {
  let list = [];

  // Render content loader if loading
  if (isLoading) {
    for (let i = 0; i < pageLimit; i++) {
      list[i] = (
        <li key={i}>
          <UsersLoader />
        </li>
      )
    }
  } else {
    // Get users in a specific page
    // const pagedUsers = users.slice((page - 1) * pageLimit, page * pageLimit);

    list = users.map(user => (
      <li key={user.id}>
        <User user={user} />
      </li>
    ));
  }

  return <ul>{list}</ul>;
};

export default UsersList;
