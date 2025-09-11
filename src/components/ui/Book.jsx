import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

function Book({ book }) {
  // add the formatter here
  const fmt = (n) => (typeof n === "number" ? n.toFixed(2) : n);

  return (
    <div className="book">
      <a href="/">
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt={`${book.title} book cover`}
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {
          new Array(5).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">${fmt(book.originalPrice.toFixed(2))}</span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice}</>
        )}
      </div>
    </div>
  );
}

export default Book;

