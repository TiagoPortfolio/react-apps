import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({userSearchTerm, searchUser}) => (
  <header>
    <input
      type="text"
      placeholder="Search"
      value={userSearchTerm}
      onChange={searchUser}
    />
  </header>
);

SearchBar.propTypes = {
  userSearchTerm: PropTypes.string.isRequired,
  searchUser: PropTypes.func.isRequired
};

export default SearchBar;
