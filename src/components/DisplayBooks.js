/* eslint-disable */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import { fetchRemoveBook } from '../redux/books/bookActions';
import styles from './DisplayBooks.module.css';

const DisplayBook = (props) => {
  const dispatch = useDispatch();
  const { bookList } = props;

  const removeBookStore = (id) => {
    dispatch(fetchRemoveBook(id));
  };

  return (
      <ul className={styles.booksContainer}>
        {bookList.map((book) => (
          <li key={book.item_id}
          className={styles.liCard}>
            <div className={styles.bookCard}>
              <p className={styles.title}>
                { book.title }
              </p>
              <p className={styles.category}>
                { book.category }
              </p>
              <button type="button" className={styles.buttons} onClick={() => { removeBookStore(book.item_id); }}>Remove Book</button>
            </div>
            <div className={styles.completedDiv}>
              <div className={styles.circle} />
              <div className={styles.completedCard}>
                <p className={`${styles.percentage} ${styles.font1Reg}`}>0%</p>
                <p className={`${styles.completed} ${styles.font1Reg}`}>Completed</p>
              </div>
            </div>
            <div className={styles.updateDiv}>
              <h3 className={`${styles.current} ${styles.font2Light}`}>Current Chapter</h3>
              <p className={`${styles.chapter} ${styles.font2Light}`}>Introduction</p>
              <button type="button" className={styles.update}>UPDATE PROGRESS</button>
            </div>
          </li>
        ))}
      </ul>
  );
};

export default DisplayBook;

DisplayBook.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};
