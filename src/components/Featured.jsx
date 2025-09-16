import React from "react";
import { books } from "../data";
import Book from "./Book";

const Featured = () => {
  console.log(books);
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>

          <div className="books">
            {books
              .filter((b) => Number(b.rating) === 5)
              .slice(0, 4)
              .map((b) => (
                <Book key={b.id} book={b} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
