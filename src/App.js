import React from "react";
import "./App.css";
import TimerOne from "./components/TimerOne";
import TimerTwo from "./components/TimerTwo";
import TimerThree from "./components/TimerThree";

function App() {
  return (
    <div>
      <h1>Walter Learning Tests : Test Réact</h1>
      <div className="App-header">
        <TimerOne />
        <TimerTwo />
        <TimerThree />
      </div>
    </div>
  );
}

export default App;
