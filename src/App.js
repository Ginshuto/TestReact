import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <h1>Walter Learning Tests : Test Réact</h1>
      <div className="App-header">
      <Timer time={40} />
      <Timer time={45} />
      <Timer time={50} />
      </div>
    </div>
  );
}

export default App;
