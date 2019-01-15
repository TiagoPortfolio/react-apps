import React from 'react';

const CATEGORIES = [
  'Dance',
  'Entertainment',
  'Festival',
  'Museums',
  'Music',
  'Theatre'
];

const Categories = ({currentCategory, filterCategory}) => (
  <nav className="nav-categories">
    <h2>Categories</h2>
    <ul className="nav-menu">
      {CATEGORIES.map((category, index) => (
        <li
          key={index}
          className={currentCategory === category ? 'active' : ''}
        >
          <a href="#" onClick={() => filterCategory(category)}>
            {category}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Categories;
