import { ADD_BOOK } from './actionTypes';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});
