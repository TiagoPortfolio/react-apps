import React from 'react';
import User from './User';
import UsersLoader from '../components/UsersLoader';
import PropTypes from 'prop-types';

const LOADER_NUMBER = 3;

const UsersList = ({users, isLoading}) => {
  let list = [];

  // Render content loader if loading
  if (isLoading) {
    for (let i = 0; i < LOADER_NUMBER; i++) {
      list[i] = (
        <li key={i}>
          <UsersLoader />
        </li>
      )
    }
  } else {
    list = users.map(user => (
      <li key={user.id}>
        <User user={user} />
      </li>
    ));
  }

  return <ul>{list}</ul>;
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default UsersList;
