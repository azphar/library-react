import React from "react";
import Book from "../components/ui/Book";
import { books as allBooks } from "../data";   

function Books() {
  return (
    <div id="books__body">
      <main id="books__main">
        <section className="container">
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>
                <select id="filter" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              <div className="books">
                {Array.isArray(allBooks) && allBooks.length > 0 ? (
                  allBooks.map((book) => (
                    <Book key={book.id ?? book.title} book={book} />
                  ))
                ) : (
                  <p style={{ padding: 16 }}>No books found.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;

