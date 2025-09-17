import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BestBooks from "../components/ui/BestBooks";

function BookInfo({ books = [], addItemToCart }) {
  const { id } = useParams();
  const book = books.find((b) => Number(b.id) === Number(id));

  // Simple helpers so we don't depend on separate components
  const fmt = (n) => (typeof n === "number" ? `$${n.toFixed(2)}` : null);
  const stars = (score) => {
    const r = Math.max(0, Math.min(5, Math.round(Number(score) || 0)));
    return "★★★★★".slice(0, r) + "☆☆☆☆☆".slice(0, 5 - r);
  };

  if (!book) {
    return (
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <p>Sorry, we couldn’t find that book.</p>
              <Link to="/books" className="book__link">Back to Books</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const originalStr = fmt(book.originalPrice);
  const saleStr = fmt(book.salePrice);
  const hasSale = typeof book.salePrice === "number";

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link" aria-label="Back to Books">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt={book.title} />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>

                <div className="book__rating" title={`${book.rating} / 5`}>
                  {stars(book.rating)}
                </div>

                <div className="book__selected--price">
                  {hasSale && originalStr ? (
                    <>
                      <span className="book__price--original">{originalStr}</span>
                      <span className="book__price--sale">{saleStr}</span>
                    </>
                  ) : (
                    originalStr && <span className="book__price--regular">{originalStr}</span>
                  )}
                </div>

                {typeof addItemToCart === "function" && (
                  <button className="btn" onClick={() => addItemToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <BestBooks id={id} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
