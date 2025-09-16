import React, { useState, useMemo } from "react";
import { books } from "../data";              
import Book from "../components/Book";   


const Books = ({books: initialBooks}) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        console.log('filter')
    }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>

                {/* Uncontrolled select with a placeholder */}
                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW__TO__HIGH">Price, Low to High</option>
                  <option value="HIGH__TO__LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div class = "books">
                 {books.map((book) => (
                    <Book book={book} key={book.id} />
                 ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
