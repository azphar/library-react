import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBolt, faBookOpen, faShoppingCart, faTags, faTimes, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt);


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


