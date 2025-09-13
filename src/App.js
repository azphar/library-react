import React, { useState } from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/ui/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

function App() {
  const [numberOfItems] = useState(0);
  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems} />
      <Landing /> 
      <Highlights /> 
      <Featured /> 
      <Discounted /> 
      <Explore /> 
      <Footer />
    </div>
  );
}

export default App;
