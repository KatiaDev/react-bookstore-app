import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import BooksProvider from "./contexts/booksContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksProvider>
        <App />
      </BooksProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
