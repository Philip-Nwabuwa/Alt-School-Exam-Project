import React from "react";
import Repo from "./Pages/repo";
import ErrorBoundary from "./Components/errorBoundary";

const App = () => {
  return (
    <div className="bg-[#242424] text-white">
      <ErrorBoundary>
        <Repo />
      </ErrorBoundary>
    </div>
  );
};

export default App;
