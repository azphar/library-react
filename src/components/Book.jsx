import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import Rating from "./Rating";
// import Price from "./Price";

function Book({ book }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setImgLoaded(false);
  }, [book?.id, book?.url]);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setImgLoaded(true);
    }
  }, [book?.url]);

  return (
    <div className="book">
      {!imgLoaded && (
        <>
          <div className="book__img--skeleton" />
          <div className="skeleton book__title--skeleton" />
          <div className="skeleton book__rating--skeleton" />
          <div className="skeleton book__price--skeleton" />
        </>
      )}

      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img
            ref={imgRef}
            src={book.url}
            alt={book.title || "Book cover"}
            className="book__img"
            onLoad={() => setImgLoaded(true)}
            loading="lazy"
            decoding="async"
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        </figure>
      </Link>

      <div className="book__title" style={{ opacity: imgLoaded ? 1 : 0 }}>
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>

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

