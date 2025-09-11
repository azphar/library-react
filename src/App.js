import React, { useState } from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";

function App() {
  const [numberOfItems] = useState(0); // change as your cart logic grows
  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems} />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
