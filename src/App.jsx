import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Repo from "./Pages/repo";
import RepoId from "./Pages/repoId";
import Page404 from "./Pages/page404";
import ErrorBoundary from "./Components/errorBoundary";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-[#242424] text-white min-h-screen">
        <ErrorBoundary>
          <Router>
            <Routes>
              <Route path="/" element={<Repo />} />
              <Route path="/repo/:repoId" element={<RepoId />} />
              <Route path="/error" element={<ErrorBoundary />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default App;
