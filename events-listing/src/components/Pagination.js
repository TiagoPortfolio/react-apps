import React from 'react';

const Pagination = ({page, pageLimit, totalEvents, changePage}) => {
  const totalPages = Math.ceil(totalEvents / pageLimit);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages[i] = (
      <li key={i} className={i === page ? 'active' : ''}>
        <a href="#" onClick={() => changePage(i)}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <ul className="pagination">
      <li className={page === 1 ? 'hide' : ''}>
        <a href="#" onClick={() => changePage(Math.max(1, page - 1))}>
          &lt;
        </a>
      </li>
      {pages}
      <li className={page === totalPages || !totalEvents ? 'hide' : ''}>
        <a href="#" onClick={() => changePage(Math.min(totalPages, page + 1))}>
          &gt;
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
