import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [numberOfItems] = useState(0); // change as your cart logic grows
  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems} />
    </div>
  );
}

export default App;
