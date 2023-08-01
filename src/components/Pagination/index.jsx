import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.wrapper}>
        <li className={` ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className={`${styles['page-item']}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            back
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className={`${styles['page-item']}`} onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className={`${styles['page-item']}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
