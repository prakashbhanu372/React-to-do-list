import React from "react";
import Header from "./components/Header";
import ListInput from "./components/ListInput";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-6">
        <Header />
        <ListInput />
      </div>
    </div>
  );
}

export default App;
