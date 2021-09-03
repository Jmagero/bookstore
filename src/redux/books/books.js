/* eslint-disable no-console */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const REQUEST_BOOKS_FAILURE = 'bookStore/books/REQUEST_BOOKS_FAILURE';
const API = 'OCEGl7wWVt4ipESKaF4S';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const getBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const fetchFailure = (err) => ({
  type: REQUEST_BOOKS_FAILURE,
  err,
});

export const getID = () => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/')
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

export const postBook = (newBook) => (dispatch) => {
  axios.post(`${URL}/apps/${API}/books`, newBook)
    .then(() => {
      dispatch(addBook(newBook));
    })
    .catch((err) => console.log(err));
};

export const fetchRemoveBook = (id) => (dispatch) => {
  axios.delete(`${URL}/apps/${API}/books/${id}`)
    .then(() => dispatch(removeBook(id)))
    .catch((err) => console.log(err));
};

export const fetchBooks = () => (dispatch) => {
  try {
    axios.get(`${URL}/apps/${API}/books`)
      .then((response) => {
        dispatch(getBooks(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

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
    default:
      return state;
  }
};

export default reducer;
/* eslint-enable no-console */
