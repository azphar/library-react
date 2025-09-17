import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./ui/Rating";

function Book({ book }) {
  // Safe number parsing (works for numbers or numeric strings)
  const orig = Number(book.originalPrice);
  const sale = Number(book.salePrice);
  const hasOriginal = Number.isFinite(orig);
  const hasSale = Number.isFinite(sale);
  const fmt = (n) => `$${n.toFixed(2)}`;

  return (
    <div className="book">
      <Link
        to={`/books/${book.id}`}
        className="book__link"
        aria-label={`Open ${book.title}`}
      >
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt={book.title} />
        </figure>

        <h3 className="book__title">{book.title}</h3>

        {/* Inline rating (no Ratings component needed) */}
        {book.rating != null && (
          <div className="book__rating" title={`${book.rating} / 5`}>
            {"★★★★★".slice(0, Math.round(Number(book.rating))) +
              "☆☆☆☆☆".slice(0, 5 - Math.round(Number(book.rating)))}
          </div>
        )}

        {/* Inline price (no Price component needed) */}
        <div className="book__price">
          {hasSale && hasOriginal ? (
            <>
              <span className="book__price--original">{fmt(orig)}</span>
              <span className="book__price--sale">{fmt(sale)}</span>
            </>
          ) : hasOriginal ? (
            <span className="book__price--regular">{fmt(orig)}</span>
          ) : null}
        </div>
      </Link>
    </div>
  );
}

export default Book;


