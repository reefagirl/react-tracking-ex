import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import { TrackedApp } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TrackedApp />
  </React.StrictMode>,
  rootElement
);
