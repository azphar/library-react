import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  const fmt = (n) => `$${n.toFixed(2)}`;

  // original price
  const orig = Number(book.originalPrice);
  const hasOriginal = Number.isFinite(orig);

  // sale price: treat null/undefined/"" as "no sale" (0 is allowed)
  const saleRaw = book.salePrice;
  const hasSale =
    saleRaw !== null &&
    saleRaw !== undefined &&
    saleRaw !== "" &&
    Number.isFinite(Number(saleRaw));
  const sale = hasSale ? Number(saleRaw) : null;

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

        {book.rating != null && (
          <div className="book__rating" title={`${book.rating} / 5`}>
            <span className="stars--full">
              {"★★★★★".slice(0, Math.round(Number(book.rating) || 0))}
            </span>
            <span className="stars--empty">
              {"☆☆☆☆☆".slice(0, 5 - Math.round(Number(book.rating) || 0))}
            </span>
          </div>
        )}

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


