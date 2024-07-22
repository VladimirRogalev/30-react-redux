import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../utils/createBookWithId';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      //   const index = state.findIndex((book) => book.id === action.payload);
      //   if (index !== -1) {
      //     state.splice(index, 1);
      //   }
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      //   return state.map((book) =>
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      //     book.id === action.payload
      //       ? { ...book, isFavorite: !book.isFavorite }
      //       : book
      //   );
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;
export const thunkFunction = async (dispatch, getState) => {
  console.log(getState());
  try {
    const res = await axios.get('http://localhost:4000/random-book');
    if (res.data && res.data.title && res.data.author) {
      dispatch(addBook(createBookWithId(res.data, 'API')));
    }
  } catch (error) {
    console.log('Error fetching random book', error);
  }
  console.log(getState());
};
export const selectBooks = (state) => state.books;
export default bookSlice.reducer;
