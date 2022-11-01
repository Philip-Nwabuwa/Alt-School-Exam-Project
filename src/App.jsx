import React from "react";
import ListOfRepos from "./Pages/ListOfRepos";
import ErrorBoundary from "./Components/errorBoundary";

const App = () => {
  return (
    <div className="bg-[#242424] text-white h-screen">
      <ErrorBoundary>
        <ListOfRepos />
      </ErrorBoundary>
    </div>
  );
};

export default App;
