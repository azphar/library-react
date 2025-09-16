import React from "react";

function Book({ book }) {
  if (!book) return null;

  const title = book.title ?? "Untitled";
  const imgSrc = book.url ?? book.image ?? book.img ?? "";
  const original = Number(
    book.originalPrice ?? book.price ?? book.listPrice ?? 0
  );
  const sale =
    book.salePrice != null && book.salePrice !== ""
      ? Number(book.salePrice)
      : null;

  return (
    <div className="book">
      <div className="book__img--wrapper">
        {imgSrc ? (
          <img className="book__img" src={imgSrc} alt={title} />
        ) : (
          <div className="book__img--skeleton" />
        )}
      </div>

      <h3 className="book__title">{title}</h3>

      <div className="book__price">
        {sale != null ? (
          <>
            <span className="book__price--normal">${original.toFixed(2)}</span>
            ${sale.toFixed(2)}
          </>
        ) : (
          <>${original.toFixed(2)}</>
        )}
      </div>
    </div>
  );
}

export default Book;

