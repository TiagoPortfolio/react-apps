import React from 'react';

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

export default SearchBar;
