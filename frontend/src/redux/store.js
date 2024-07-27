import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/bookSlice';
import filterReducer from './slices/filterSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    error: errorReducer,
    filter: filterReducer,
  },
});

export default store;
