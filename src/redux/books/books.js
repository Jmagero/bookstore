const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const REQUEST_BOOKS_FAILURE = 'bookStore/books/REQUEST_BOOKS_FAILURE';
const API = 'OCEGl7wWVt4ipESKaF4S'
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi'

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
})

export const fetchBooksRequest = () => ({
  type: REQUEST_BOOKS,
})

export const fetchFailure = (err) => ({
  type: REQUEST_BOOKS_FAILURE,
  err
})
export const getID = () => {
    axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/')
    .then( response => response.data)
    .catch( err => console.log(err))
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
