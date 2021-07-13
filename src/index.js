import React from "react";
import ReactDOM from "react-dom";
import "../src/App.css";

import DetalleDeHeroe from "./components/DetalleDeHeroe";
import charactersInfo from "./data/characters.json";

const element = document.getElementById("root");
const reactElement = (
  <React.StrictMode>
    <DetalleDeHeroe heroe={charactersInfo.data.results[8]} />
  </React.StrictMode>
);

ReactDOM.render(reactElement, element);
