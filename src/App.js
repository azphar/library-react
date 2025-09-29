import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { books as booksData } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === book.id);
      if (existing) {
        return prev.map((i) =>
          i.id === book.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const updateCart = (item, qty) => {
    const quantity = Math.max(0, Math.min(99, parseInt(qty || 0, 10)));
    setCart((prev) =>
      prev
        .map((i) => (i.id === item.id ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (item) => {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
  };

  const priceOf = (i) => i.salePrice || i.originalPrice || 0;
  const subtotal = cart.reduce((s, i) => s + priceOf(i) * (i.quantity || 0), 0);
  const taxRate = 0.06;
  const tax = subtotal * taxRate;
  const totals = { subtotal, tax, total: subtotal + tax };
  const numberOfItems = cart.reduce((n, i) => n + (i.quantity || 0), 0);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems} />

        <Route path="/" exact component={Home} />

        <Route path="/books" exact render={() => <Books books={booksData} />} />

        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={booksData} addItemToCart={addItemToCart} />
          )}
        />

        <Route
          path="/cart"
          render={() => (
            <Cart
              cart={cart}
              updateCart={updateCart}
              removeItem={removeItem}
              totals={totals}
            />
          )}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;



