import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/_global.scss";
import { Game } from "./pages/game";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
