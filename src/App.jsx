import React from "react";
import "./index.css"; 
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/:id" component={BookInfo} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
