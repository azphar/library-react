import React from "react";
import { Switch, Route } from "react-router-dom";   
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
  {/* Detail FIRST, dynamic param */}
  <Route
    path="/books/:id"
    render={(props) => <BookInfo {...props} books={books} />}
  />
  {/* List EXACT so it doesn't swallow /books/:id */}
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


