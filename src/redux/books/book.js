import api from '../../API/api';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';

export const addBook = (book) => async (dispatch) => {
  api.addNewBook(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (bookId) => async (dispatch) => {
  api.deleteBook(bookId);
  dispatch({ type: REMOVE_BOOK, bookId });
};

export const getBooks = () => async (dispatch) => {
  const books = await api.fetchBooks();
  dispatch({ type: FETCH_BOOKS, books });
};

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.books],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.books),
      };
    case FETCH_BOOKS:
      return action.books;
    default:
      return state;
  }
}
