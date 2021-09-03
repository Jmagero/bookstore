import axios from 'axios';
import {
  URL, API, ADD_BOOK, REMOVE_BOOK, FETCH_BOOKS, REQUEST_FAILURE,
} from './bookTypes';

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
  type: REQUEST_FAILURE,
  err,
});

export const getID = () => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/')
    .then((response) => response.data);
};

export const postBook = (newBook) => (dispatch) => {
  axios.post(`${URL}/apps/${API}/books`, newBook)
    .then(() => {
      dispatch(addBook(newBook));
    })
    .catch((err) => dispatch(fetchFailure(err)));
};

export const fetchRemoveBook = (id) => (dispatch) => {
  axios.delete(`${URL}/apps/${API}/books/${id}`)
    .then(() => dispatch(removeBook(id)))
    .catch((err) => dispatch(fetchFailure(err)));
};

export const fetchBooks = () => (dispatch) => {
  try {
    axios.get(`${URL}/apps/${API}/books`)
      .then((response) => {
        dispatch(getBooks(response.data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  } catch (err) {
    dispatch(fetchFailure(err));
  }
};
