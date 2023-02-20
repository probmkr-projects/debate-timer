import React from "react";
import "./App.scss";

const App: React.FC<Record<string, never>> = () => {
  return (
    <div className="App">
      <div className="timer">
        <div className="time">
          <span id="min" className="min"></span>
          <span className="sep">:</span>
          <span id="sec" className="sec"></span>
          <span className="sep">:</span>
          <span id="msec" className="msec"></span>
        </div>
        <div className="buttons">
          <div className="start-pause"></div>
          <div className="next"></div>
        </div>
      </div>
      <div className="sidebar">
        <div className="flow">
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default App;
