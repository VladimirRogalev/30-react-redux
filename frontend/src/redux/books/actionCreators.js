import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};
