import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

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

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: id,
  };
};
