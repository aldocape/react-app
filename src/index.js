import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "../src/App.css";

import App from "./App";

const element = document.getElementById("root");
const reactElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

ReactDOM.render(reactElement, element);
