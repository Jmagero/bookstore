import {
  ADD_BOOK, REMOVE_BOOK, FETCH_BOOKS, REQUEST_FAILURE,
} from './bookTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  let booksList = [...state];
  switch (action.type) {
    case ADD_BOOK:
      booksList.push(action.payload);
      return booksList;

    case REMOVE_BOOK:
      booksList = booksList.filter((book) => book.item_id !== action.id);
      return booksList;

    case FETCH_BOOKS: {
      const fetchBooks = Object.keys(action.payload)
        .map((key) => ({ ...action.payload[key][0], item_id: key }));
      booksList = [...booksList, ...fetchBooks];
      return booksList;
    }
    case REQUEST_FAILURE:
      return booksList;

    default:
      return state;
  }
};

export default reducer;
