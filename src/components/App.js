import React from "react";
import Header from "./Header";
import Questions from "./Questions";

const App = () => {
  return (
    <div className="App">
      <Header className="Header" dark={true}>
        React Interview Helper
      </Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
