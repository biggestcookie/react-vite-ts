import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/_global.scss";
import { Game } from "./pages/Game";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
