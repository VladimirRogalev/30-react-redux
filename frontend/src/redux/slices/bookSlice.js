import { createSlice } from '@reduxjs/toolkit';

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
export const selectBooks = (state) => state.books;
export default bookSlice.reducer;
