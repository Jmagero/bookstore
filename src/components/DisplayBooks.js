/* eslint-disable */
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRemoveBook, fetchBooks } from '../redux/books/books';
import React, { useState, useEffect } from 'react';

const DisplayBook = (props) => {
  const dispatch = useDispatch();
  const { bookList } = props;

  const removeBookStore = (id) => {
    dispatch(fetchRemoveBook(id));
  };


  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <li key={book.item_id}>
            <p>
              Title:
              { book.title }
            </p>
            <p>
              Author:
              { book.category }
            </p>
            <button type="button" onClick={() => { removeBookStore(book.item_id); }}>Remove Book</button>
          </li>
        ))}
      </ul> 
    </div>
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
