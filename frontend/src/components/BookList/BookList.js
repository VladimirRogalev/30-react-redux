import { useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import './BookList.css';
import { useSelector } from 'react-redux';
import {
  selectAuthorFilter,
  selectTitleFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;

    return matchesTitle && matchesAuthor && matchesFavorite;
  });
  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };
  const handleDeleteBook = (id) => {
    console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p> No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author} </strong>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
