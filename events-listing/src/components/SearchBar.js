import React from 'react';

const SearchBar = ({eventSearchTerm, searchEvent}) => (
  <header>
    <input
      type="text"
      placeholder="Search by event"
      value={eventSearchTerm}
      onChange={searchEvent}
    />
  </header>
);

export default SearchBar;
