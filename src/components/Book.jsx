import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";  
import Price from "./Price";    

function Book({ book }) {
  return (
    <div className="book">
      {/* Navigate to the detail page without a full reload */}
      <Link
        to={`/books/${book.id}`}
        className="book__link"
        aria-label={`Open ${book.title}`}
      >
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt={book.title} />
        </figure>

        <h3 className="book__title">{book.title}</h3>

        {/* Show rating + price on the card */}
        <Ratings rating={book.rating} />
        <div className="book__price">
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </div>
      </Link>
    </div>
  );
}

export default Book;

