import React, { useMemo, useState } from "react";
import Book from "../components/Book";


function Books({ books: initialBooks = [] }) {
  const [sort, setSort] = useState("");      // "", "LOW__TO__HIGH", "HIGH__TO__LOW", "RATING"
  const [rating, setRating] = useState("");  // "", "5", "4+", "3+"

  const price = (b) => b.salePrice ?? b.originalPrice;

  // Derive the list from the original data so filters/sorts can be changed freely
  const list = useMemo(() => {
    let arr = [...initialBooks];

    // Rating filter
    if (rating === "5")   arr = arr.filter((b) => Number(b.rating) >= 5);
    if (rating === "4+")  arr = arr.filter((b) => Number(b.rating) >= 4);
    if (rating === "3+")  arr = arr.filter((b) => Number(b.rating) >= 3);

    // Sort
    if (sort === "LOW__TO__HIGH")  arr.sort((a, b) => price(a) - price(b));
    if (sort === "HIGH__TO__LOW")  arr.sort((a, b) => price(b) - price(a));
    if (sort === "RATING")         arr.sort((a, b) => Number(b.rating) - Number(a.rating));

    return arr;
  }, [initialBooks, rating, sort]);

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>

                {/* Controls */}
                <div className="books__controls">
                  {/* Sort dropdown */}
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    aria-label="Sort books"
                  >
                    <option value="">Sort</option>
                    <option value="LOW__TO__HIGH">Price, Low to High</option>
                    <option value="HIGH__TO__LOW">Price, High to Low</option>
                    <option value="RATING">Rating (High to Low)</option>
                  </select>

                  {/* Rating filter with star labels */}
                  <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    aria-label="Filter by rating"
                  >
                    <option value="">All ratings</option>
                    <option value="5">★★★★★ (5)</option>
                    <option value="4+">★★★★☆ &nbsp;and up</option>
                    <option value="3+">★★★☆☆ &nbsp;and up</option>
                  </select>
                </div>
              </div>

              <div className="books">
                {list.map((book) => (
                  <Book key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;

