import { Link } from "react-router-dom";
import { UnorderedList, PriceTag } from "./books.styled";
import React from "react";
import { BookEntity } from "../../state/books/BookEntity";

type booksProps = {
  books: BookEntity[];
};

const Books: React.FC<booksProps> = ({ books }) => {
  const base_Url = `http://localhost:3006/`;

  return (
    <UnorderedList>
      {books.map((book) => {
        return (
          <li key={book.id} style={{ width: "200px" }}>
            <Link to={`/books/${book.id}`}>
              <img
                src={base_Url + `uploads/${book.filename}`}
                alt="thumbnail"
                width={"200px"}
                height={"300px"}
              />
              <PriceTag>
                <p>{book.title}</p>
                <h2>{book.price}</h2>
              </PriceTag>
            </Link>
          </li>
        );
      })}
    </UnorderedList>
  );
};

export default Books;
