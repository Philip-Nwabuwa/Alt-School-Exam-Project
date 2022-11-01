import React from "react";
import ListOfRepos from "./Pages/ListOfRepos";
import Page404 from "./Pages/page404";
import ErrorBoundary from "./Components/errorBoundary";

const App = () => {
  return (
    <div className="bg-[#242424] text-white">
      <ErrorBoundary>
        <ListOfRepos />
        <Page404 />
      </ErrorBoundary>
    </div>
  );
};

export default App;
