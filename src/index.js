import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import PostState from "./context/PostState";

ReactDOM.render(
  <React.StrictMode>
    <PostState>
      <App />
    </PostState>
  </React.StrictMode>,
  document.getElementById("root")
);
