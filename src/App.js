import React from "react";
import { Switch, Route } from "react-router-dom";   
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import { books } from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;


