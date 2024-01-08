import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBooks } from "../../state/books/bookSlice";
import { BookEntity } from "../../state/books/BookEntity";
import Books from "./books";
import BooksPagination from "../pagination/bookspagination";
import { Container } from "./booksList.styled";

const BooksList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(12);

  const books: BookEntity[] = useSelector(
    (state: RootState) => state.book.book
  );

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Books books={currentBooks} />
      <Container>
        <h2>Results: {books.length}</h2>
        <BooksPagination
          booksPerPage={booksPerPage}
          totalBooks={books.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
};

export default BooksList;
