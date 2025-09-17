import React from "react";
import { books as allBooks } from "../../data";
import Book from "../Book";

function BestBooks({ id }) {
  const currentId = Number(id);

  const recommended = allBooks
    .filter((b) => Number(b.id) !== currentId && Number(b.rating) >= 4.5)
    .slice(0, 4);

  return (
    <div className="books">
      {recommended.map((b) => (
        <Book key={b.id} book={b} />
      ))}
    </div>
  );
}

export default BestBooks;
