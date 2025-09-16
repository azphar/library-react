// src/components/ui/Discounted.jsx
import React from "react";
import { books } from "../../data";
import Book from "./Book";

const Discounted = () => {
  return (
    <section id="recent"> {/* keep 'recent' if that's what the class CSS expects */}
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>

          <div className="books">
            {books
              .filter((book) => book.salePrice != null) // only discounted titles
              .slice(0, 8)                              // optional: first 8
              .map((book) => (
                <Book key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;

