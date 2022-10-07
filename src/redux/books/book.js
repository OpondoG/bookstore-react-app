import { v4 as uuid } from 'uuid';

// Actions
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// State
const initialState = {
  books: [
    {
      id: uuid(),
      title: 'Atomic Habits',
      author: 'James Clear',
    },
    {
      id: uuid(),
      title: 'Rich Dad Poor Dad',
      author: 'Robert K',
    },
    {
      id: uuid(),
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
    },

  ],
};

// create actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}
