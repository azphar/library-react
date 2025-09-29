import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import Price from "./Price";
import Rating from "./Rating"; */


function Book({ book }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // When the book prop changes (new route, pagination, etc.), show skeleton again
  useEffect(() => {
    setImgLoaded(false);
  }, [book?.id, book?.url]);

  const handleImgLoaded = () => setImgLoaded(true);

  return (
    <div className="book">
      {/* SKELETONS (match your provided class names) */}
      {!imgLoaded && (
        <>
          <div className="book__img--skeleton" />
          <div className="skeleton book__title--skeleton" />
          <div className="skeleton book__rating--skeleton" />
          <div className="skeleton book__price--skeleton" />
        </>
      )}

      {/* IMAGE + LINK (hidden until loaded so onLoad can fire) */}
      <Link
        to={`/books/${book.id}`}
        style={{ display: imgLoaded ? "block" : "none" }}
      >
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt={book.title || "Book cover"}
            className={`book__img${imgLoaded ? " book__img--visible" : ""}`}
            onLoad={handleImgLoaded}
            // Optional: improve perceived performance
            loading="lazy"
            decoding="async"
          />
        </figure>
      </Link>

      {/* TITLE */}
      <div
        className="book__title"
        style={{ display: imgLoaded ? "block" : "none" }}
      >
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>

      {/* META (rating + price) */}
      {imgLoaded && (
        <>
          {/* <Rating rating={book.rating} /> */}
          {/* <Price salePrice={book.salePrice} originalPrice={book.originalPrice} /> */}
        </>
      )}
    </div>
  );
}

export default Book;



