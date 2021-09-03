/* eslint-disable */
import AddBook from './AddBook';
import DisplayBook from './DisplayBooks';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';

const Book = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const bookList = store.booksReducer;

  return (
    <div>
    <h3>BOOKS</h3>
      <DisplayBook bookList={bookList} />
      <AddBook />
    </div>
  )
}

export default Book;
