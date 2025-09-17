import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  // if you already have this elsewhere, keep your existing version
  const addItemToCart = (book) => {
    // TODO: implement your cart add logic
    console.log("Add to cart:", book.title);
  };

  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* Detail route FIRST */}
        <Route
          path="/books/:id"
          render={(props) => (
            <BookInfo {...props} books={books} addItemToCart={addItemToCart} />
          )}
        />
        {/* List route LAST + exact */}
        <Route
          path="/books"
          exact
          render={() => <Books books={books} />}
        />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

