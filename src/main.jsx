import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Page404 from "./Pages/Page404";
import "./index.css";
import RepoId from "./Pages/repoId";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/repo/:id" element={<RepoId />} /> */}
        <Route exact path="/repo/:repoId" element={<RepoId />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
