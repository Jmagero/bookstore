import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DisplayBook = () => {
  const state = useSelector((state) => state);
  const { books } = state;
  const dispatch = useDispatch();

  const removeBookStore = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      {books.map((book) => (
        <li key={book.id}>
          <p>
            Title:
            { book.title }
          </p>
          <p>
            Author:
            { book.author }
          </p>
          <button type="button" id={book.id} onClick={(e) => { removeBookStore(e); }}>Remove Book</button>
        </li>
      ))}
    </div>
  );
};

export default DisplayBook;
