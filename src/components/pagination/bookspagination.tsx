import React from "react";
import { PaginationList, PaginationButtons } from "./bookspagination.styled";

type paginatonProps = {
  booksPerPage: number;
  totalBooks: number;
  paginate: any;
};

const BooksPagination: React.FC<paginatonProps> = ({
  booksPerPage,
  totalBooks,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <PaginationList>
        {pageNumbers.map((number) => (
          <PaginationButtons key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </PaginationButtons>
        ))}
      </PaginationList>
    </div>
  );
};

export default BooksPagination;
